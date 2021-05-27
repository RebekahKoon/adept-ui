// pages/dashboard.js
import Router from 'next/router'
import { useState } from 'react'
import Select from 'react-select'

import { SEARCH_JOBS } from '../queries/search'
import { GET_ALL_JOBS } from '../queries/getAllJobPostings'
import Layout from '../components/Layout'
import SearchResult from '../components/SearchResult'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import SearchBar from '../components/SearchBar'
import StyledSideBar from '../components/SideBar'
import MainContentFlexContainer from '../components/styles/MainContentFlexContainer'
import client from '../apollo/apolloClient'
import Checkbox from '../components/Checkbox'
import {
  SSRSearchResults,
  SSRMain,
  SSRMainContentContainer,
  SSRSearchResultsHeader,
  SSRSortByDropdown,
  SSRFilterSection,
  SSRFilterOptions,
  SSRFilterOptionHeader,
  SSRDividerContainer,
  SSRDivider,
  SSRCheckBoxOption,
  StyledDropdown,
  SSRMainContentFooter,
  SSRFooterPagination,
  SSRFooterPrev,
  SSRFooterPageNumber,
  SSRFooterNext,
} from '../styles/SearchResultsStyle'

function SearchResultView(props) {
  const JobType = ['Full Time', 'Part Time', 'Contract', 'Internship']
  const JobSkills = ['React', 'Python', 'Javascript']
  const Experience = ['Entry Level', 'Associate', 'Senior', 'Leadership']
  const dataArr = props.data
  const selectedCheckboxes = new Set()

  function removeURLParameter(url, parameter) {
    var urlparts = url.split('?')
    if (urlparts.length >= 2) {
      var prefix = encodeURIComponent(parameter) + '='
      var pars = urlparts[1].split(/[&;]/g)

      for (var i = pars.length; i-- > 0; ) {
        if (pars[i].lastIndexOf(prefix, 0) !== -1) {
          pars.splice(i, 1)
        }
      }

      return urlparts[0] + (pars.length > 0 ? '?' + pars.join('&') : '')
    }
    return url
  }

  const toggleCheckbox = (label) => {
    if (selectedCheckboxes.has(label)) {
      selectedCheckboxes.delete(label)
      var newHref
      if (label == 'Full Time') {
        newHref = removeURLParameter(window.location.href, 'jt1')
        Router.push(newHref)
      } else if (label == 'Part Time') {
        newHref = removeURLParameter(window.location.href, 'jt2')
        Router.push(newHref)
      } else if (label == 'Contract') {
        newHref = removeURLParameter(window.location.href, 'jt3')
        Router.push(newHref)
      } else if (label == 'Internship') {
        newHref = removeURLParameter(window.location.href, 'jt4')
        Router.push(newHref)
      } else if (label == 'React') {
        newHref = removeURLParameter(window.location.href, 'sc1')
        Router.push(newHref)
      } else if (label == 'Python') {
        newHref = removeURLParameter(window.location.href, 'sc2')
        Router.push(newHref)
      } else if (label == 'Javascript') {
        newHref = removeURLParameter(window.location.href, 'sc3')
        Router.push(newHref)
      } else if (label == 'Entry Level') {
        newHref = removeURLParameter(window.location.href, 'ex1')
        Router.push(newHref)
      } else if (label == 'Associate') {
        newHref = removeURLParameter(window.location.href, 'ex2')
        Router.push(newHref)
      } else if (label == 'Senior') {
        newHref = removeURLParameter(window.location.href, 'ex3')
        Router.push(newHref)
      } else if (label == 'Leadership') {
        newHref = removeURLParameter(window.location.href, 'ex4')
        Router.push(newHref)
      }
    } else {
      selectedCheckboxes.add(label)
      if (label == 'Full Time' && !props.jt1) {
        Router.push(window.location.href + '&jt1=FullTime')
      } else if (label == 'Part Time' && !props.jt2) {
        Router.push(window.location.href + '&jt2=PartTime')
      } else if (label == 'Contract' && !props.jt3) {
        Router.push(window.location.href + '&jt3=Contract')
      } else if (label == 'Internship' && !props.jt4) {
        Router.push(window.location.href + '&jt4=Internship')
      } else if (label == 'React' && !props.sc1) {
        Router.push(window.location.href + '&sc1=React')
      } else if (label == 'Python' && !props.sc2) {
        Router.push(window.location.href + '&sc2=Python')
      } else if (label == 'Javascript' && !props.sc3) {
        Router.push(window.location.href + '&sc3=Javascript')
      } else if (label == 'Entry Level' && !props.ex1) {
        Router.push(window.location.href + '&ex1=EntryLevel')
      } else if (label == 'Associate' && !props.ex2) {
        Router.push(window.location.href + '&ex2=Associate')
      } else if (label == 'Senior' && !props.ex3) {
        Router.push(window.location.href + '&ex3=Senior')
      } else if (label == 'Leadership' && !props.ex4) {
        Router.push(window.location.href + '&ex4=Leadership')
      }
    }
  }

  const handleFormSubmit = (formSubmitEvent) => {
    formSubmitEvent.preventDefault()
    for (const checkbox of selectedCheckboxes) {
      console.log(checkbox, 'is selected.')
    }
  }

  const createCheckbox = (label) => {
    if (label == 'Full Time' && props.jt1) {
      selectedCheckboxes.add(label)
      return (
        <Checkbox
          label={label}
          handleCheckboxChange={toggleCheckbox}
          key={label}
          checked="true"
        />
      )
    } else if (label == 'Part Time' && props.jt2) {
      selectedCheckboxes.add(label)
      return (
        <Checkbox
          label={label}
          handleCheckboxChange={toggleCheckbox}
          key={label}
          checked="true"
        />
      )
    } else if (label == 'Contract' && props.jt3) {
      selectedCheckboxes.add(label)
      return (
        <Checkbox
          label={label}
          handleCheckboxChange={toggleCheckbox}
          key={label}
          checked="true"
        />
      )
    } else if (label == 'Internship' && props.jt4) {
      selectedCheckboxes.add(label)
      return (
        <Checkbox
          label={label}
          handleCheckboxChange={toggleCheckbox}
          key={label}
          checked="true"
        />
      )
    } else if (label == 'React' && props.sc1) {
      selectedCheckboxes.add(label)
      return (
        <Checkbox
          label={label}
          handleCheckboxChange={toggleCheckbox}
          key={label}
          checked="true"
        />
      )
    } else if (label == 'Python' && props.sc2) {
      selectedCheckboxes.add(label)
      return (
        <Checkbox
          label={label}
          handleCheckboxChange={toggleCheckbox}
          key={label}
          checked="true"
        />
      )
    } else if (label == 'Javascript' && props.sc3) {
      selectedCheckboxes.add(label)
      return (
        <Checkbox
          label={label}
          handleCheckboxChange={toggleCheckbox}
          key={label}
          checked="true"
        />
      )
    } else if (label == 'Entry Level' && props.ex1) {
      selectedCheckboxes.add(label)
      return (
        <Checkbox
          label={label}
          handleCheckboxChange={toggleCheckbox}
          key={label}
          checked="true"
        />
      )
    } else if (label == 'Associate' && props.ex2) {
      selectedCheckboxes.add(label)
      return (
        <Checkbox
          label={label}
          handleCheckboxChange={toggleCheckbox}
          key={label}
          checked="true"
        />
      )
    } else if (label == 'Senior' && props.ex3) {
      selectedCheckboxes.add(label)
      return (
        <Checkbox
          label={label}
          handleCheckboxChange={toggleCheckbox}
          key={label}
          checked="true"
        />
      )
    } else if (label == 'Leadership' && props.ex4) {
      selectedCheckboxes.add(label)
      return (
        <Checkbox
          label={label}
          handleCheckboxChange={toggleCheckbox}
          key={label}
          checked="true"
        />
      )
    } else {
      return (
        <Checkbox
          label={label}
          handleCheckboxChange={toggleCheckbox}
          key={label}
        />
      )
    }
  }

  const createJobTypeCheckboxes = () => JobType.map(createCheckbox)

  const createDataDivs = () =>
    dataArr.map((data, index) => (
      <SearchResult
        data={dataArr[index]}
        id={index}
        q={props.q}
        currPage={props.currPage}
      />
    ))

  const createJobCatCheckboxes = () => JobSkills.map(createCheckbox)

  const createExperienceCheckboxes = () => Experience.map(createCheckbox)

  const [sortOption, setOption] = useState('All')
  const handleOptionChange = (e) => {
    setOption(e.value)
    if (e.value == 'newest') {
      if (!props.o) {
        Router.push(window.location.href + '&o=newest')
      } else {
        if (props.q) {
          Router.push(
            '/search-results?page=' +
              props.currPage +
              '&q=' +
              props.q +
              '&o=newest'
          )
        } else {
          Router.push('/search-results?page=' + props.currPage + '&o=newest')
        }
      }
    } else {
      if (!props.o) {
        Router.push(window.location.href + '&o=oldest')
      } else {
        if (props.q) {
          Router.push(
            '/search-results?page=' +
              props.currPage +
              '&q=' +
              props.q +
              '&o=oldest'
          )
        } else {
          Router.push('/search-results?page=' + props.currPage + '&o=oldest')
        }
      }
    }
  }

  const sortOptions = [
    {
      label: 'Newest',
      value: 'newest',
    },
    {
      label: 'Oldest',
      value: 'oldest',
    },
  ]

  function createFooter() {
    if (props.currPage - 1 == 0 && props.pageCount > 1) {
      return (
        <SSRFooterPagination>
          <SSRFooterPageNumber>
            Showing Page {props.currPage} of {props.pageCount}
          </SSRFooterPageNumber>
          <SSRFooterNext onClick={handleClickNext}>
            <p>Next</p>
            <i className="fas fa-chevron-right"></i>
          </SSRFooterNext>
        </SSRFooterPagination>
      )
    } else if (
      props.currPage - 1 > 0 &&
      props.currPage - 1 < props.pageCount - 1
    ) {
      return (
        <SSRFooterPagination>
          <SSRFooterPrev onClick={handleClickPrev}>
            <i className="fas fa-chevron-left"></i>
            <p>Previous</p>
          </SSRFooterPrev>
          <SSRFooterPageNumber>
            Showing Page {props.currPage} of {props.pageCount}
          </SSRFooterPageNumber>
          <SSRFooterNext onClick={handleClickNext}>
            <p>Next</p>
            <i className="fas fa-chevron-right"></i>
          </SSRFooterNext>
        </SSRFooterPagination>
      )
    } else if (
      props.currPage - 1 == props.pageCount - 1 &&
      props.pageCount - 1
    ) {
      return (
        <SSRFooterPagination>
          <SSRFooterPrev onClick={handleClickPrev}>
            <i className="fas fa-chevron-left"></i>
            <p>Previous</p>
          </SSRFooterPrev>
          <SSRFooterPageNumber>
            Showing Page {props.currPage} of {props.pageCount}
          </SSRFooterPageNumber>
        </SSRFooterPagination>
      )
    }
  }

  const handleClickPrev = (e) => {
    e.preventDefault()
    var newPage = parseInt(props.currPage) - 1
    Router.push('/search-results?page=' + newPage)
  }

  const handleClickNext = (e) => {
    e.preventDefault()
    var newPage = parseInt(props.currPage) + 1
    Router.push('/search-results?page=' + newPage)
  }

  const SearchResultSideBar = () => {
    return (
      <StyledSideBar>
        <SSRFilterSection>
          <SSRFilterOptionHeader>JobType</SSRFilterOptionHeader>
          <SSRFilterOptions>
            <SSRCheckBoxOption>
              <form onSubmit={handleFormSubmit}>
                {createJobTypeCheckboxes()}
              </form>
            </SSRCheckBoxOption>
          </SSRFilterOptions>
        </SSRFilterSection>
        <SSRFilterSection>
          <SSRDividerContainer>
            <SSRDivider />
          </SSRDividerContainer>
          <SSRFilterOptionHeader>Job Category</SSRFilterOptionHeader>
          <SSRFilterOptions>
            <SSRCheckBoxOption>
              <form onSubmit={handleFormSubmit}>
                {createJobCatCheckboxes()}
              </form>
            </SSRCheckBoxOption>
          </SSRFilterOptions>
        </SSRFilterSection>
        <SSRFilterSection>
          <SSRDividerContainer>
            <SSRDivider />
          </SSRDividerContainer>
          <SSRFilterOptionHeader>Experience</SSRFilterOptionHeader>
          <SSRFilterOptions>
            <SSRCheckBoxOption>
              <form onSubmit={handleFormSubmit}>
                {createExperienceCheckboxes()}
              </form>
            </SSRCheckBoxOption>
          </SSRFilterOptions>
        </SSRFilterSection>
      </StyledSideBar>
    )
  }

  const SearchResultDropdown = () => {
    return (
      <SSRSortByDropdown>
        Sort by:
        <Select
          defaultValue={sortOptions[0]}
          onChange={handleOptionChange}
          options={sortOptions}
          styles={StyledDropdown}
          indicatorSeparator={false}
          isSearchable={false}
        />
      </SSRSortByDropdown>
    )
  }
  return (
    <Layout>
      <SearchBar headerText="Search Jobs" />
      <MainContentFlexContainer>
        <SSRMain>
          <SSRSearchResultsHeader>
            {props.data.length} results found
            <SearchResultDropdown />
          </SSRSearchResultsHeader>
          <SSRMainContentContainer>
            <SearchResultSideBar />
            <SSRSearchResults>{createDataDivs()}</SSRSearchResults>
          </SSRMainContentContainer>
          <SSRMainContentFooter>{createFooter()}</SSRMainContentFooter>
        </SSRMain>
      </MainContentFlexContainer>
    </Layout>
  )
}

export default SearchResultView

export const getServerSideProps = async (context) => {
  if (context.query.page == null) {
    return {
      redirect: {
        destination: '/search-results?page=1',
        permanent: false,
      },
    }
  }
  if (context.query.q) {
    const { data: jobData } = await client.query({
      query: SEARCH_JOBS,
      variables: { searchTerm: context.query.q },
    })
    var pageCount = Math.ceil(jobData.searchJobPostings.length / 12)
    return {
      props: {
        data: jobData.searchJobPostings,
        q: context.query.q,
        currPage: context.query.page,
        pageCount: pageCount,
        o: context.query.o || null,
        jt1: context.query.jt1 || null,
        jt2: context.query.jt2 || null,
        jt3: context.query.jt3 || null,
        jt4: context.query.jt4 || null,
        sc1: context.query.sc1 || null,
        sc2: context.query.sc2 || null,
        sc3: context.query.sc3 || null,
        ex1: context.query.ex1 || null,
        ex2: context.query.ex2 || null,
        ex3: context.query.ex3 || null,
        ex4: context.query.ex4 || null,
      },
    }
  } else {
    const { data: allJobData } = await client.query({
      query: GET_ALL_JOBS,
    })

    if (allJobData.getAllJobPostings.length > 12) {
      var pageStart = (context.query.page - 1) * 12
      var pageEnd = pageStart + 12
      var length = allJobData.getAllJobPostings.length
      var pageCount = Math.ceil(allJobData.getAllJobPostings.length / 12)
      if (pageEnd > length) {
        var diff = pageEnd - allJobData.getAllJobPostings.length
        pageEnd = pageEnd - diff
      }
      var finArr = []
      var tempPos = 0
      for (var i = pageStart; i < pageEnd; i++) {
        finArr[tempPos] = allJobData.getAllJobPostings[i]
        tempPos++
      }
      return {
        props: {
          data: finArr,
          currPage: context.query.page,
          pageCount: pageCount,
          o: context.query.o || null,
          jt1: context.query.jt1 || null,
          jt2: context.query.jt2 || null,
          jt3: context.query.jt3 || null,
          jt4: context.query.jt4 || null,
          sc1: context.query.sc1 || null,
          sc2: context.query.sc2 || null,
          sc3: context.query.sc3 || null,
          ex1: context.query.ex1 || null,
          ex2: context.query.ex2 || null,
          ex3: context.query.ex3 || null,
          ex4: context.query.ex4 || null,
        },
      }
    }
  }
}
