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
import { GET_JOB_POSTING_BY_ID } from '../../../queries/jobPosting'
import {
  CenterContainer,
  MainContentFlexContainer,
} from '../../../components/styles'
import SearchBar from '../../../components/SearchBar'
import {
  StyledSkills,
  StyledJobCardGrid,
  StyledGridItem,
} from '../../../components/JobCard'
import { JobPostSkill } from '../../../components/Skill'
import {
  ButtonSolid,
  StyledButtonSolid,
  LargeButtonSolid,
} from '../../../components/Button'

const JobPostContainer = styled.div`
  padding: 2.5rem;
  min-height: 800px;
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
  width: 800px;
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

const JobPosting = ({ user }) => {
  // use router.back() to go back
  const [jobPost, setJobPost] = useState(null)
  const router = useRouter()
  const { id } = router.query

  const { loading, error, data } = useQuery(GET_JOB_POSTING_BY_ID, {
    variables: { jobPostId: id },
    onCompleted: (data) => {
      if (data) {
        setJobPost(data.getJobPostingById)
      }
    },
    onError: (error) => {
      console.log(error)
    },
  })

  useEffect(() => {
    console.log(jobPost)
  }, [jobPost])

  return (
    <Layout hasNav={false}>
      <MainContentFlexContainer>
        <JobPostContainer>
          {loading ? (
            <CenterContainer>
              <Loader type="TailSpin" color="#570EF1" />
            </CenterContainer>
          ) : (
            <>
              <JobPostHeader>
                <CompanyLogo>
                  <i className="fab fa-asymmetrik fa-3x"></i>
                </CompanyLogo>
                <h2>{jobPost?.company}</h2>
                <h1>{jobPost?.positionTitle}</h1>
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
              </JobPostHeader>

              <PostedBySection>
                <span>
                  Posted on {new Date(parseInt(jobPost?.datePosted)).getDate()}
                </span>
                <span>By: {jobPost?.postedBy.name}</span>
                <span>
                  <ConnectButton>Connect</ConnectButton>
                </span>
              </PostedBySection>

              <DescriptionSection>{jobPost?.description}</DescriptionSection>
              <SubSection>
                <h2>Desired Skills:</h2>
                <StyledSkills>
                  {data?.getJobPostingById?.skillsRequired?.map((skill) => (
                    <JobPostSkill name={skill.name} key={skill.skillId} />
                  ))}
                </StyledSkills>
              </SubSection>
              <SubSection>
                <h2>Current Applicants Possess These Skills:</h2>
                <StyledSkills>
                  {data?.getJobPostingById?.skillsRequired?.map(
                    (skill, index) => (
                      <JobPostSkill name={skill.name} key={index} />
                    )
                  )}
                </StyledSkills>
              </SubSection>
              <SubSection>
                <LargeButtonSolid>Apply</LargeButtonSolid>
              </SubSection>
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
