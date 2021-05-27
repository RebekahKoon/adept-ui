import { useState, useEffect } from 'react'
import Layout from '../../../components/Layout'
import { useQuery, useMutation } from '@apollo/client'
import withSession from '../../../lib/session'
import client from '../../../apollo/apolloClient'
import { GET_JOB_POSTING_BY_ID } from '../../../queries/jobPosting'
import { MainContentFlexContainer } from '../../../components/styles'
import SearchBar from '../../../components/SearchBar'
import { useRouter } from 'next/router'

const JobPosting = (props) => {
  // use router.back() to go back
  const router = useRouter()
  const { id } = router.query

  const { loading, error, data } = useQuery(GET_JOB_POSTING_BY_ID, {
    variables: { jobPostId: id },
  })
  useEffect(() => {
    console.log(data)
  }, [data])
  return (
    <Layout>
      <MainContentFlexContainer>
        <div>
          <h1>A Very Long Remote Position Job Title Taking Up Space</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
      </MainContentFlexContainer>
    </Layout>
  )
}

export default JobPosting

export const getServerSideProps = withSession(async ({ req, res }) => {
  // if (context.query.q) {
  //   const data = await client.query({
  //     query: SEARCH_JOBS,
  //     variables: { searchTerm: context.query.q },
  //   })
  //   return {
  //     props: {
  //       data: data.data.searchJobPostings,
  //       id: context.query.id,
  //       q: context.query.q,
  //     },
  //   }
  // } else {
  //   const { data: allJobData } = await client.query({
  //     query: GET_ALL_JOBS,
  //   })
  //   return {
  //     props: {
  //       data: allJobData.getAllJobPostings,
  //       id: context.query.id,
  //     },
  //   }
  // }
  const user = req.session.get('user')

  // const { data } = await client.query({
  //   query: GET_JOB_POSTING_BY_ID,
  //   variables: { jobPostId: id },
  // })
  // console.log(data)

  return {
    props: {
      user,
    },
  }
  // const { id } = context.query
  // console.log(id)
  // return { props: { id } }
})
