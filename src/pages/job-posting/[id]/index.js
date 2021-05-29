import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { useQuery, useMutation } from '@apollo/client'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import client from '../../../apollo/apolloClient'
import Loader from 'react-loader-spinner'
import Layout from '../../../components/Layout'
import withSession from '../../../lib/session'
import {
  GET_JOB_POSTING_BY_ID,
  CREATE_JOB_APPLICATION,
} from '../../../queries/jobPosting'
import { MainContentFlexContainer } from '../../../components/styles'
import {
  StyledSkills,
  StyledJobCardGrid,
  StyledGridItem,
} from '../../../components/JobCard'
import { JobPostSkill } from '../../../components/Skill'
import { StyledButtonSolid, LargeButtonSolid } from '../../../components/Button'
import Applicant from '../../../components/Applicant'

const JobPostContainer = styled.div`
  margin-top: 5rem;
  padding: 2.5rem;
  min-height: 80vh;
  width: 100%;
`

const JobPostHeader = styled.header`
  h2 {
    color: var(--purple);
  }
`

const CompanyLogo = styled.section`
  padding-bottom: 2.5rem;
`

const PostedBySection = styled.section`
  padding-top: 2.5rem;
  padding-bottom: 1rem;
  span {
    padding-right: 1rem;
  }
`

const DescriptionSection = styled.section`
  padding-bottom: 2.5rem;
  line-height: 1.5;
`

const SubSection = styled.section`
  padding-bottom: 2.5rem;
`

const ConnectButton = styled(StyledButtonSolid)`
  border-radius: 1rem;
  font-size: 0.875rem;
`

const Em = styled.span`
  font-weight: 700;
  padding-right: 0;
`

const AppliedIcon = styled.span`
  padding-left: 1rem;
  color: green;
`

const SideBar = styled.div`
  width: 33%;
`

const ApplicantsContainer = styled.div`
  padding: 2.5rem;
  border: 1px solid var(--lightGray);
  box-shadow: 0px 1px 10px rgba(80, 120, 239, 0.1);
  border-radius: 5px;
`

const JobPostFlexContainer = styled.section`
  display: flex;
  justify-content: space-between;
`

const JobPostContent = styled.div`
  width: 60%;
`

const ApplyButton = styled(LargeButtonSolid)`
  width: 150px;
`

const FullPageLoadContainer = styled.div`
  width: 100%;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

// Returns an array of n most common skills
// applicants is a JobApplication that contains user field
const getMostCommonSkills = (applicants, n = 10) => {
  const skillFrequency = new Map()
  for (const applicant of applicants) {
    const {
      user: { skills },
    } = applicant
    for (const skill of skills) {
      if (!skillFrequency.get(skill.name)) {
        skillFrequency.set(skill.name, 0)
      }
      skillFrequency.set(skill.name, skillFrequency.get(skill.name) + 1)
    }
  }
  const sortedSkills = new Map(
    [...skillFrequency.entries()].sort((a, b) => b[1] - a[1])
  )
  return Array.from(sortedSkills.keys()).slice(0, n)
}

const JobPosting = ({ user }) => {
  // use router.back() to go back
  const [jobPost, setJobPost] = useState(null)
  const [hasApplied, setHasApplied] = useState(false)
  const [isOwner, setIsOwner] = useState(false)
  const router = useRouter()
  const { id: jobPostId } = router.query

  const { loading, error, data } = useQuery(GET_JOB_POSTING_BY_ID, {
    variables: { jobPostId },
    onCompleted: (data) => {
      if (data) {
        setJobPost(data.getJobPostingById)
        setIsOwner(data.getJobPostingById.postedBy.userId === user.userId)
        getMostCommonSkills(data.getJobPostingById.applicants)
      }
    },
    onError: (error) => {
      console.log(error)
    },
  })

  const [
    applyToJob,
    { loading: applyLoading, error: applyError, data: applyData },
  ] = useMutation(CREATE_JOB_APPLICATION, {
    onCompleted: (data) => {
      console.log(data)
    },
    onError: (err) => {
      console.log(err)
    },
    refetchQueries: [
      {
        query: GET_JOB_POSTING_BY_ID,
        variables: { jobPostId },
      },
    ],
    awaitRefetchQueries: true,
  })

  useEffect(() => {
    setHasApplied(
      jobPost?.applicants.filter(
        (applicant) => applicant.user.userId === user.userId
      ).length !== 0
    )
    setJobPost(jobPost)
  }, [jobPost, user.userId])

  const handleApply = async () => {
    const input = {
      jobPostId,
      userId: user.userId,
      dateApplied: new Date(Date.now()).toISOString(),
    }
    await applyToJob({
      variables: input,
    })
    setHasApplied(true)
  }

  // applicant is a JobApplication that has a user field
  const Applicants = ({ applicants }) => {
    return (
      <ApplicantsContainer>
        <h2>Applicants</h2>
        {applicants?.map((applicant) => (
          <Applicant applicant={applicant.user} key={applicant.user.userId} />
        ))}
      </ApplicantsContainer>
    )
  }

  return (
    <Layout navFadeIn={false}>
      <MainContentFlexContainer>
        <JobPostContainer>
          {loading ? (
            <FullPageLoadContainer>
              <Loader type="TailSpin" color="#570EF1" />
            </FullPageLoadContainer>
          ) : (
            <>
              <JobPostHeader>
                <CompanyLogo>
                  <i className="fab fa-asymmetrik fa-3x"></i>
                </CompanyLogo>
                <h2>{jobPost?.company}</h2>
              </JobPostHeader>
              <JobPostFlexContainer>
                <JobPostContent>
                  <h1>
                    {jobPost?.positionTitle}
                    {hasApplied && !isOwner && (
                      <AppliedIcon>
                        <i className="fas fa-check-circle"></i>
                      </AppliedIcon>
                    )}
                  </h1>
                  <StyledJobCardGrid>
                    <StyledGridItem>
                      <i className="fas fa-map-marker-alt"></i> {jobPost?.city},{' '}
                      {jobPost?.state}
                    </StyledGridItem>
                    <StyledGridItem>
                      <i className="fas fa-clock"></i>{' '}
                      {jobPost?.type === 'FULL_TIME'
                        ? 'Full-time'
                        : jobPost?.type === 'PART_TIME'
                        ? 'Part-time'
                        : 'Internship'}
                    </StyledGridItem>
                    <StyledGridItem>
                      <i className="fas fa-dollar-sign"></i>{' '}
                      {Number(jobPost?.salary).toLocaleString()}
                    </StyledGridItem>
                  </StyledJobCardGrid>
                  <PostedBySection>
                    <span>
                      Published{' '}
                      {new Date(
                        parseInt(jobPost?.datePosted)
                      ).toLocaleDateString()}
                    </span>
                    <span>
                      By: <Em>{isOwner ? 'You' : jobPost?.postedBy.name}</Em>
                    </span>
                    {!isOwner && (
                      <span>
                        <ConnectButton>Connect</ConnectButton>
                      </span>
                    )}
                  </PostedBySection>

                  <DescriptionSection>
                    {jobPost?.description}
                  </DescriptionSection>
                  <SubSection>
                    <h2>Desired Skills:</h2>
                    <StyledSkills>
                      {data?.getJobPostingById?.skillsRequired?.map((skill) => (
                        <JobPostSkill name={skill.name} key={skill.skillId} />
                      ))}
                    </StyledSkills>
                  </SubSection>
                  <SubSection>
                    <h2>Most Common Skills of Current Applicants:</h2>
                    <StyledSkills>
                      {jobPost && jobPost.applicants.length
                        ? getMostCommonSkills(
                            jobPost?.applicants
                          ).map((skill, index) => (
                            <JobPostSkill name={skill} key={index} />
                          ))
                        : 'No applicants'}
                    </StyledSkills>
                  </SubSection>
                  <SubSection>
                    {/* Don't render Apply Button if this user posted this job */}
                    {!isOwner && (
                      <ApplyButton
                        loading={applyLoading}
                        disabled={applyLoading || hasApplied}
                        onClick={(e) => {
                          e.preventDefault()
                          handleApply()
                        }}
                      >
                        {hasApplied ? 'Applied' : 'Apply'}
                      </ApplyButton>
                    )}
                  </SubSection>
                </JobPostContent>
                <SideBar>
                  <Applicants applicants={jobPost?.applicants} />
                </SideBar>
              </JobPostFlexContainer>
            </>
          )}
        </JobPostContainer>
      </MainContentFlexContainer>
    </Layout>
  )
}

export default JobPosting

export const getServerSideProps = withSession(async ({ req, res }) => {
  const user = req.session.get('user')
  return {
    props: {
      user,
    },
  }
})
