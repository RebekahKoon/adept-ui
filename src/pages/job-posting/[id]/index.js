import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useQuery, useMutation } from '@apollo/client'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import Loader from 'react-loader-spinner'
import Layout from '../../../components/Layout'
import withSession from '../../../lib/session'
import {
  GET_JOB_POSTING_BY_ID,
  CREATE_JOB_APPLICATION,
  ADD_CONTACT,
  GET_USER_CONTACTS_AND_SKILLS,
} from '../../../queries/jobPosting'
import { MainContentFlexContainer } from '../../../components/styles'
import {
  StyledSkills,
  StyledJobCardGrid,
  StyledGridItem,
} from '../../../components/JobCard'
import { JobPostSkill } from '../../../components/Skill'
import { Applicants, MostCommonSkills } from '../../../components/JobPost'
import { Em } from '../../../components/styles'
import {
  JobPostContainer,
  JobPostHeader,
  CompanyLogo,
  PostedBySection,
  DescriptionSection,
  SubSection,
  ConnectButton,
  AppliedIcon,
  SideBar,
  JobPostFlexContainer,
  JobPostContent,
  ApplyButton,
  FullPageLoadContainer,
  ConnectButtonWrapper,
} from '../../../styles/JobPosting'

const JobPosting = ({ user }) => {
  // use router.back() to go back
  const [jobPost, setJobPost] = useState(null)
  const [hasApplied, setHasApplied] = useState(false)
  const [isOwner, setIsOwner] = useState(false)
  const [contacts, setContacts] = useState([])
  const [userSkills, setUserSkills] = useState([])
  const [hasConnected, setHasConnected] = useState(false)
  const [addedStatus, setAddedStatus] = useState(false)

  // Get the jobPostId from the url
  const router = useRouter()
  const { id: jobPostId } = router.query

  const { loading, error, data } = useQuery(GET_JOB_POSTING_BY_ID, {
    variables: { jobPostId },
    onCompleted: (data) => {
      if (data) {
        setJobPost(data.getJobPostingById)
        setIsOwner(data.getJobPostingById.postedBy.userId === user.userId)
      }
    },
    onError: (error) => {
      console.log(error)
    },
  })

  const { data: userData } = useQuery(GET_USER_CONTACTS_AND_SKILLS, {
    variables: { userId: user.userId },
    onCompleted: (data) => {
      if (data) {
        setContacts(data.getUserById.contacts)
        setUserSkills(data?.getUserById.skills.map((skill) => skill.name))
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

  const [
    addContact,
    {
      loading: addContactLoading,
      error: addContactError,
      data: addContactData,
    },
  ] = useMutation(ADD_CONTACT, {
    onCompleted: (data) => {
      if (data) {
        setContacts(data.addContactToUser.contacts)
        setAddedStatus(true)
      }
    },
    onError: (err) => {
      console.log(err)
    },
    refetchQueries: [
      {
        query: GET_USER_CONTACTS_AND_SKILLS,
        variables: { userId: user.userId },
      },
    ],
    awaitRefetchQueries: true,
  })

  useEffect(() => {
    setContacts(userData?.getUserById.contacts)
    setUserSkills(userData?.getUserById.skills.map((skill) => skill.name))
    setHasConnected(
      userData?.getUserById?.contacts.filter(
        (contact) => contact.userId === jobPost?.postedBy.userId
      ).length !== 0
    )
  }, [userData, user.userId, jobPost, addContactData])

  useEffect(() => {
    setJobPost(data?.getJobPostingById)
    setHasApplied(
      data?.getJobPostingById?.applicants.filter(
        (applicant) => applicant.user.userId === user.userId
      ).length !== 0
    )
  }, [data, user.userId])

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

  const handleAddContact = async () => {
    const input = {
      userId: user.userId,
      contactId: jobPost?.postedBy.userId,
    }
    await addContact({
      variables: input,
    })
    setHasConnected(true)
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
                      <ConnectButtonWrapper>
                        {addContactLoading ? (
                          <Loader
                            type="TailSpin"
                            color="#570EF1"
                            height={16}
                            width={16}
                          />
                        ) : (
                          <ConnectButton
                            disabled={addContactLoading || hasConnected}
                            onClick={(e) => {
                              e.preventDefault()
                              handleAddContact()
                            }}
                          >
                            {hasConnected ? 'Connected' : 'Connect'}
                          </ConnectButton>
                        )}
                      </ConnectButtonWrapper>
                    )}
                    {addedStatus && (
                      <span style={{ color: 'green' }}>Added to contacts</span>
                    )}
                  </PostedBySection>

                  <DescriptionSection>
                    {jobPost?.description}
                  </DescriptionSection>
                  <SubSection>
                    <h2>Desired Skills:</h2>
                    <StyledSkills>
                      {data?.getJobPostingById?.skillsRequired?.map((skill) => (
                        <JobPostSkill
                          name={skill.name}
                          hasSkill={userSkills.includes(skill.name)}
                          key={skill.skillId}
                        />
                      ))}
                    </StyledSkills>
                  </SubSection>
                  <SubSection>
                    <MostCommonSkills
                      applicants={jobPost?.applicants}
                      userSkills={userSkills}
                    />
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
                  {jobPost?.applicants.length !== 0 && (
                    <Applicants applicants={jobPost?.applicants} />
                  )}
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
