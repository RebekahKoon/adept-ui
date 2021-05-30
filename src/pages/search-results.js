// pages/dashboard.js
import Router from 'next/router'
import Select from 'react-select'
import styled from 'styled-components'
import { useForm, Controller } from 'react-hook-form'
import { SEARCH_USERS } from '../queries/searchUsers'
import { SEARCH_JOBS } from '../queries/search'
import { GET_ALL_JOBS } from '../queries/getAllJobPostings'
import Layout from '../components/Layout'
import UserCard from '../components/UserCard'
import { Input, Label } from '../components/Input'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import SearchBar from '../components/SearchBar'
import StyledSideBar from '../components/SideBar'
import MainContentFlexContainer from '../components/styles/MainContentFlexContainer'
import client from '../apollo/apolloClient'
import Checkbox from '../components/Checkbox'
import { JobPostCard } from '../components/JobCard'
import { SearchSkillDropdown, StateDropdown } from '../components/SkillDropdown'
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
  SkillDropdownContainer,
  SSRMainContentFooter,
  SSRFooterPagination,
  SSRFooterPrev,
  SSRFooterPageNumber,
  SSRFooterNext,
} from '../styles/SearchResultsStyle'
import { StyledSkillDropdown } from '../components/SkillDropdown'
import states from '../utils/states'

const FormGrid = styled.div`
  margin: 0 auto;
  display: inline-grid;
  text-align: left;
  grid-template-columns: repeat(2, minmax(50px, 600px));
  gap: 1.5rem 1rem;
  line-height: 1.25em;
`

function SearchResultView(props) {
  var dataArr
  var searchLength

  dataArr = props.data
  searchLength = props.searchLength

  // Consts for the checkboxes for JobType and Salary as well as the data of the skills from the search
  const JobType = ['Full Time', 'Part Time', 'Internship']
  const SalaryRange = ['$0 - $40,000', '$40,000 - $100,000', '$100,000 +']
  const UserType = ['Employer', 'Employee']
  const skillArr = props.skillArr

  const selectedCheckboxes = new Set()

  // Function used to remove URL parameters when a checkbox is unticked
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

  // Toggle and untoggle the checkbox as well as push or remove the value of that chebox from the URL
  const toggleCheckbox = (label) => {
    if (selectedCheckboxes.has(label)) {
      selectedCheckboxes.delete(label)
      var newHref
      if (label == 'Employer') {
        newHref = removeURLParameter(window.location.href, 'ut1')
        Router.push(newHref)
      } else if (label == 'Employee') {
        newHref = removeURLParameter(window.location.href, 'ut2')
        Router.push(newHref)
      } else if (label == 'Full Time') {
        newHref = removeURLParameter(window.location.href, 'jt1')
        Router.push(newHref)
      } else if (label == 'Part Time') {
        newHref = removeURLParameter(window.location.href, 'jt2')
        Router.push(newHref)
      } else if (label == 'Internship') {
        newHref = removeURLParameter(window.location.href, 'jt3')
        Router.push(newHref)
      } else if (label == '$0 - $40,000') {
        newHref = removeURLParameter(window.location.href, 'sc1')
        Router.push(newHref)
      } else if (label == '$40,000 - $100,000') {
        newHref = removeURLParameter(window.location.href, 'sc2')
        Router.push(newHref)
      } else if (label == '$100,000 +') {
        newHref = removeURLParameter(window.location.href, 'sc3')
        Router.push(newHref)
      }
    } else {
      selectedCheckboxes.add(label)
      if (label == 'Employer' && !props.ut1) {
        Router.push(window.location.href + '&ut1=Employer')
      } else if (label == 'Employee' && !props.ut2) {
        Router.push(window.location.href + '&ut2=Employee')
      } else if (label == 'Full Time' && !props.jt1) {
        Router.push(window.location.href + '&jt1=FullTime')
      } else if (label == 'Part Time' && !props.jt2) {
        Router.push(window.location.href + '&jt2=PartTime')
      } else if (label == 'Internship' && !props.jt3) {
        Router.push(window.location.href + '&jt3=Internship')
      } else if (label == '$0 - $40,000' && !props.sc1) {
        Router.push(window.location.href + '&sc1=1')
      } else if (label == '$40,000 - $100,000' && !props.sc2) {
        Router.push(window.location.href + '&sc2=1')
      } else if (label == '$100,000 +' && !props.sc3) {
        Router.push(window.location.href + '&sc3=1')
      }
    }
  }

  // Create the checkbox
  const createCheckbox = (label) => {
    if (label == 'Employer' && props.ut1) {
      selectedCheckboxes.add(label)
      return (
        <Checkbox
          label={label}
          handleCheckboxChange={toggleCheckbox}
          key={label}
          checked="true"
        />
      )
    } else if (label == 'Employee' && props.ut2) {
      selectedCheckboxes.add(label)
      return (
        <Checkbox
          label={label}
          handleCheckboxChange={toggleCheckbox}
          key={label}
          checked="true"
        />
      )
    } else if (label == 'Full Time' && props.jt1) {
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
    } else if (label == 'Internship' && props.jt3) {
      selectedCheckboxes.add(label)
      return (
        <Checkbox
          label={label}
          handleCheckboxChange={toggleCheckbox}
          key={label}
          checked="true"
        />
      )
    } else if (label == '$0 - $40,000' && props.sc1) {
      selectedCheckboxes.add(label)
      return (
        <Checkbox
          label={label}
          handleCheckboxChange={toggleCheckbox}
          key={label}
          checked="true"
        />
      )
    } else if (label == '$40,000 - $100,000' && props.sc2) {
      selectedCheckboxes.add(label)
      return (
        <Checkbox
          label={label}
          handleCheckboxChange={toggleCheckbox}
          key={label}
          checked="true"
        />
      )
    } else if (label == '$100,000 +' && props.sc3) {
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

  const createUserTypeCheckboxes = () => UserType.map(createCheckbox)

  // Create the search result data div
  const createDataDivs = () =>
    dataArr.map((data, index) =>
      props.uq ? (
        <UserCard data={dataArr[index]} />
      ) : (
        <JobPostCard
          jobPosting={dataArr[index]}
          key={dataArr[index].jobPostId}
        />
      )
    )

  const createSalRangeCheckboxes = () => SalaryRange.map(createCheckbox)

  // Used to handle the change to the sort dropdown
  const handleOptionChange = (e) => {
    if (e.value == 'newest') {
      var searchParams = new URLSearchParams(window.location.search)
      searchParams.set('o', 'newest')
      window.location.search = searchParams.toString()
    } else {
      searchParams = new URLSearchParams(window.location.search)
      searchParams.set('o', 'oldest')
      window.location.search = searchParams.toString()
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

  var currOption
  if (props.o == 'oldest') {
    currOption = sortOptions[1]
  } else {
    currOption = [sortOptions[0]]
  }

  // Create the prev, next, and page count in the footer
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

  // Go back a page in your search
  const handleClickPrev = () => {
    var page = parseInt(props.currPage) - 1
    var searchParams = new URLSearchParams(window.location.search)
    searchParams.set('page', page)
    window.location.search = searchParams.toString()
  }

  // Go forward a page in your search
  const handleClickNext = () => {
    var page = parseInt(props.currPage) + 1
    var searchParams = new URLSearchParams(window.location.search)
    searchParams.set('page', page)
    window.location.search = searchParams.toString()
  }

  const updateUserLocation = (location) => {
    console.log(location)
  }
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({ mode: 'onSubmit' })

  const onSubmit = (data) => {
    const input = {
      state: data.state?.value ? data.state.value : '',
    }

    updateUserLocation({ variables: input })
    reset()
  }

  // Render the SearchResultSideBar
  const SearchResultSideBar = () => {
    return (
      <StyledSideBar>
        <SSRFilterSection>
          <SSRFilterOptionHeader>
            {props.uq ? 'User Type' : 'Job Type'}
          </SSRFilterOptionHeader>
          <SSRFilterOptions>
            <SSRCheckBoxOption>
              {props.uq ? (
                <form>{createUserTypeCheckboxes()}</form>
              ) : (
                <form>{createJobTypeCheckboxes()}</form>
              )}
            </SSRCheckBoxOption>
          </SSRFilterOptions>
        </SSRFilterSection>
        <SSRFilterSection>
          <SSRDividerContainer>
            <hr />
          </SSRDividerContainer>
          <SSRFilterOptionHeader>
            {props.uq ? 'Location' : 'Salary Range'}
          </SSRFilterOptionHeader>
          <SSRFilterOptions>
            <SSRCheckBoxOption>
              {props.uq ? (
                <SkillDropdownContainer>
                  <StateDropdown stateArr={props.stateArr} />
                </SkillDropdownContainer>
              ) : (
                <form>{createSalRangeCheckboxes()}</form>
              )}
            </SSRCheckBoxOption>
          </SSRFilterOptions>
        </SSRFilterSection>
        <SSRFilterSection>
          <SSRDividerContainer>
            <hr />
          </SSRDividerContainer>
          <SSRFilterOptionHeader>Skill</SSRFilterOptionHeader>
          <SSRFilterOptions>
            <SkillDropdownContainer>
              <SearchSkillDropdown skillArr={skillArr} skill={props.skill} />
            </SkillDropdownContainer>
          </SSRFilterOptions>
        </SSRFilterSection>
      </StyledSideBar>
    )
  }

  // Render the SearchResultDropdown
  const SearchResultDropdown = () => {
    return (
      <SSRSortByDropdown>
        {props.uq ? '' : 'Sort by:'}
        {props.uq ? (
          ''
        ) : (
          <Select
            defaultValue={currOption}
            onChange={handleOptionChange}
            options={sortOptions}
            styles={StyledDropdown}
            indicatorSeparator={false}
            isSearchable={false}
          />
        )}
      </SSRSortByDropdown>
    )
  }

  // Render the rest of the page
  return (
    <Layout>
      <SearchBar headerText="Search Jobs" />
      <MainContentFlexContainer>
        <SSRMain>
          <SSRSearchResultsHeader>
            {searchLength} results found
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
  // Redirect user if they try to go to the wrong URL
  if (context.query.page == null) {
    return {
      redirect: {
        destination: '/search-results?page=1',
        permanent: false,
      },
    }
  }

  /* If the user is searching for a user, run the user search
     and pass the correct values to the renderer */
  if (context.query.uq) {
    const { data: userData } = await client.query({
      query: SEARCH_USERS,
      variables: { searchTerm: context.query.uq },
    })
    var newArr = userData.searchUsers
    var skill = context.query.skill
    var state = context.query.state
    var exArr = []
    var stArr = []
    var ut1 = context.query.ut1
    var ut2 = context.query.ut2
    var utArr = []
    var stateArr = []

    if (ut1) {
      tempArr = newArr.filter((term) => term.type == 'EMPLOYER')
      for (i = 0; i < tempArr.length; i++) {
        utArr.push(tempArr[i])
      }
    }
    if (ut2) {
      tempArr = newArr.filter((term) => term.type == 'EMPLOYEE')
      for (i = 0; i < tempArr.length; i++) {
        utArr.push(tempArr[i])
      }
    }

    if (ut1 || ut2) {
      newArr = utArr
    }

    if (skill) {
      tempArr = []
      var tempPos = 0
      for (i = 0; i < newArr.length; i++) {
        for (j = 0; j < newArr[i].skills.length - 1; j++) {
          if (newArr[i].skills[j].name == skill) {
            tempArr[tempPos] = newArr[i]
            tempPos++
          }
        }
      }
      for (i = 0; i < tempArr.length; i++) {
        exArr.push(tempArr[i])
      }
    }

    if (skill) {
      newArr = exArr
    }

    if (state) {
      tempArr = []
      tempPos = 0
      for (i = 0; i < newArr.length; i++) {
        if (newArr[i].state == state) {
          tempArr[tempPos] = newArr[i]
          tempPos++
        }
      }
      for (i = 0; i < tempArr.length; i++) {
        stArr.push(tempArr[i])
      }
    }

    if (state) {
      newArr = stArr
    }

    if (o !== 'oldest') {
      newArr = newArr
        .slice()
        .sort((a, b) => parseInt(b.datePosted) - parseInt(a.datePosted))
    } else {
      newArr = newArr
        .slice()
        .sort((a, b) => parseInt(a.datePosted) - parseInt(b.datePosted))
    }

    var skillArr = []
    for (i = 0; i < newArr.length; i++) {
      for (var j = 0; j < newArr[i].skills.length; j++) {
        skillArr.push(newArr[i].skills[j].name)
      }
    }

    var sortedArr = skillArr.reduce((sortedArr, index) => {
      sortedArr[index] = (sortedArr[index] || 0) + 1
      return sortedArr
    }, {})

    skillArr.sort(function (i0, i1) {
      return sortedArr[i1] - sortedArr[i0]
    })

    var orderedArr = skillArr.filter(function (value, index, self) {
      return self.indexOf(value) === index
    })

    for (i = 0; i < newArr.length; i++) {
      if (newArr[i].state) {
        stateArr.push(newArr[i].state)
      }
    }
    var orderedStateArr = stateArr.filter(function (value, index, self) {
      return self.indexOf(value) === index
    })

    arrLen = newArr.length
    if (newArr.length > 12) {
      pageStart = (context.query.page - 1) * 12
      pageEnd = pageStart + 12
      length = newArr.length
      pageCount = Math.ceil(length / 12)
      if (pageEnd > length) {
        diff = pageEnd - length
        pageEnd = pageEnd - diff
      }
      finArr = []
      tempPos = 0
      for (i = pageStart; i < pageEnd; i++) {
        finArr[tempPos] = newArr[i]
        tempPos++
      }
    } else {
      finArr = newArr
    }
    return {
      props: {
        data: finArr,
        uq: context.query.uq,
        currPage: context.query.page,
        pageCount: pageCount || 0,
        jt1: jt1 || null,
        jt2: jt2 || null,
        jt3: jt3 || null,
        sc1: sc1 || null,
        sc2: sc2 || null,
        sc3: sc3 || null,
        ut1: ut1 || null,
        ut2: ut2 || null,
        skill: skill || null,
        skillArr: orderedArr || null,
        stateArr: orderedStateArr,
        searchLength: arrLen,
      },
    }
  }
  /* If the user is searching for a job, run the job search
     and pass the correct values to the renderer */
  if (context.query.q) {
    const { data: jobData } = await client.query({
      query: SEARCH_JOBS,
      variables: { searchTerm: context.query.q },
    })
    var jt1 = context.query.jt1
    var jt2 = context.query.jt2
    var jt3 = context.query.jt3
    var sc1 = context.query.sc1
    var sc2 = context.query.sc2
    var sc3 = context.query.sc3
    skill = context.query.skill
    newArr = jobData.searchJobPostings
    var jtArr = []
    var scArr = []
    exArr = []
    var arrLen
    var o = context.query.o

    if (jt1) {
      var tempArr = newArr.filter((term) => term.type == 'FULL_TIME')
      for (var i = 0; i < tempArr.length; i++) {
        jtArr.push(tempArr[i])
      }
    }
    if (jt2) {
      tempArr = newArr.filter((term) => term.type == 'PART_TIME')
      for (i = 0; i < tempArr.length; i++) {
        jtArr.push(tempArr[i])
      }
    }
    if (jt3) {
      tempArr = newArr.filter((term) => term.type == 'INTERNSHIP')
      for (i = 0; i < tempArr.length; i++) {
        jtArr.push(tempArr[i])
      }
    }
    if (jt1 || jt2 || jt3) {
      newArr = jtArr
    }
    if (sc1) {
      tempArr = newArr.filter((term) => term.salary < 40000)
      for (i = 0; i < tempArr.length; i++) {
        scArr.push(tempArr[i])
      }
    }
    if (sc2) {
      tempArr = newArr.filter(
        (term) => term.salary > 40000 && term.salary <= 100000
      )
      for (i = 0; i < tempArr.length; i++) {
        scArr.push(tempArr[i])
      }
    }
    if (sc3) {
      tempArr = newArr.filter((term) => term.salary > 100000)
      for (i = 0; i < tempArr.length; i++) {
        scArr.push(tempArr[i])
      }
    }
    if (sc1 || sc2 || sc3) {
      newArr = scArr
    }
    if (skill) {
      tempArr = []
      tempPos = 0
      for (i = 0; i < newArr.length; i++) {
        for (j = 0; j < newArr[i].skillsRequired.length - 1; j++) {
          if (newArr[i].skillsRequired[j].name == skill) {
            tempArr[tempPos] = newArr[i]
            tempPos++
          }
        }
      }
      for (i = 0; i < tempArr.length; i++) {
        exArr.push(tempArr[i])
      }
    }

    if (skill) {
      newArr = exArr
    }

    if (o !== 'oldest') {
      newArr = newArr
        .slice()
        .sort((a, b) => parseInt(b.datePosted) - parseInt(a.datePosted))
    } else {
      newArr = newArr
        .slice()
        .sort((a, b) => parseInt(a.datePosted) - parseInt(b.datePosted))
    }

    skillArr = []
    for (i = 0; i < newArr.length; i++) {
      for (j = 0; j < newArr[i].skillsRequired.length; j++) {
        skillArr.push(newArr[i].skillsRequired[j].name)
      }
    }

    sortedArr = skillArr.reduce((sortedArr, index) => {
      sortedArr[index] = (sortedArr[index] || 0) + 1
      return sortedArr
    }, {})

    skillArr.sort(function (i0, i1) {
      return sortedArr[i1] - sortedArr[i0]
    })

    orderedArr = skillArr.filter(function (value, index, self) {
      return self.indexOf(value) === index
    })

    arrLen = newArr.length
    if (newArr.length > 12) {
      var pageStart = (context.query.page - 1) * 12
      var pageEnd = pageStart + 12
      var length = newArr.length
      var pageCount = Math.ceil(length / 12)
      if (pageEnd > length) {
        var diff = pageEnd - length
        pageEnd = pageEnd - diff
      }
      var finArr = []
      tempPos = 0
      for (i = pageStart; i < pageEnd; i++) {
        finArr[tempPos] = newArr[i]
        tempPos++
      }
    } else {
      finArr = newArr
    }
    return {
      props: {
        data: finArr,
        q: context.query.q,
        currPage: context.query.page,
        pageCount: pageCount || 0,
        jt1: jt1 || null,
        jt2: jt2 || null,
        jt3: jt3 || null,
        sc1: sc1 || null,
        sc2: sc2 || null,
        sc3: sc3 || null,
        skill: skill || null,
        skillArr: orderedArr || null,
        searchLength: arrLen,
      },
    }
  } else {
    /* If the just clicked on the View Jobs tab, run the job search
     and pass the correct values to the renderer */
    const { data: allJobData } = await client.query({
      query: GET_ALL_JOBS,
    })
    jt1 = context.query.jt1
    jt2 = context.query.jt2
    jt3 = context.query.jt3
    sc1 = context.query.sc1
    sc2 = context.query.sc2
    sc3 = context.query.sc3
    skill = context.query.skill
    newArr = allJobData.getAllJobPostings
    jtArr = []
    scArr = []
    exArr = []
    o = context.query.o
    if (jt1) {
      tempArr = newArr.filter((term) => term.type == 'FULL_TIME')
      for (i = 0; i < tempArr.length; i++) {
        jtArr.push(tempArr[i])
      }
    }
    if (jt2) {
      tempArr = newArr.filter((term) => term.type == 'PART_TIME')
      for (i = 0; i < tempArr.length; i++) {
        jtArr.push(tempArr[i])
      }
    }
    if (jt3) {
      tempArr = newArr.filter((term) => term.type == 'INTERNSHIP')
      for (i = 0; i < tempArr.length; i++) {
        jtArr.push(tempArr[i])
      }
    }
    if (jt1 || jt2 || jt3) {
      newArr = jtArr
    }
    if (sc1) {
      tempArr = newArr.filter((term) => term.salary < 40000)
      for (i = 0; i < tempArr.length; i++) {
        scArr.push(tempArr[i])
      }
    }
    if (sc2) {
      tempArr = newArr.filter(
        (term) => term.salary > 40000 && term.salary < 100000
      )
      for (i = 0; i < tempArr.length; i++) {
        scArr.push(tempArr[i])
      }
    }
    if (sc3) {
      tempArr = newArr.filter((term) => term.salary > 100000)
      for (i = 0; i < tempArr.length; i++) {
        scArr.push(tempArr[i])
      }
    }
    if (sc1 || sc2 || sc3) {
      newArr = scArr
    }
    if (skill) {
      tempArr = []
      tempPos = 0
      for (i = 0; i < newArr.length; i++) {
        for (j = 0; j < newArr[i].skillsRequired.length; j++) {
          if (newArr[i].skillsRequired[j].name == skill) {
            tempArr[tempPos] = newArr[i]
            tempPos++
          }
        }
      }
      for (i = 0; i < tempArr.length; i++) {
        exArr.push(tempArr[i])
      }
    }

    if (skill) {
      newArr = exArr
    }

    if (o !== 'oldest') {
      newArr = newArr
        .slice()
        .sort((a, b) => parseInt(b.datePosted) - parseInt(a.datePosted))
    } else {
      newArr = newArr
        .slice()
        .sort((a, b) => parseInt(a.datePosted) - parseInt(b.datePosted))
    }

    skillArr = []
    for (i = 0; i < newArr.length; i++) {
      for (j = 0; j < newArr[i].skillsRequired.length; j++) {
        skillArr.push(newArr[i].skillsRequired[j].name)
      }
    }

    sortedArr = skillArr.reduce((sortedArr, index) => {
      sortedArr[index] = (sortedArr[index] || 0) + 1
      return sortedArr
    }, {})

    skillArr.sort(function (i0, i1) {
      return sortedArr[i1] - sortedArr[i0]
    })

    orderedArr = skillArr.filter(function (value, index, self) {
      return self.indexOf(value) === index
    })

    arrLen = newArr.length
    if (newArr.length > 12) {
      pageStart = (context.query.page - 1) * 12
      pageEnd = pageStart + 12
      length = newArr.length
      pageCount = Math.ceil(length / 12)
      if (pageEnd > length) {
        diff = pageEnd - length
        pageEnd = pageEnd - diff
      }
      finArr = []
      tempPos = 0
      for (i = pageStart; i < pageEnd; i++) {
        finArr[tempPos] = newArr[i]
        tempPos++
      }
      return {
        props: {
          data: finArr,
          currPage: context.query.page,
          pageCount: pageCount,
          o: context.query.o || null,
          jt1: jt1 || null,
          jt2: jt2 || null,
          jt3: jt3 || null,
          sc1: sc1 || null,
          sc2: sc2 || null,
          sc3: sc3 || null,
          skill: skill || null,
          skillArr: orderedArr || null,
          searchLength: arrLen,
        },
      }
    } else {
      arrLen = newArr.length
      return {
        props: {
          data: newArr,
          currPage: context.query.page,
          pageCount: 1,
          o: context.query.o || null,
          jt1: jt1 || null,
          jt2: jt2 || null,
          jt3: jt3 || null,
          sc1: sc1 || null,
          sc2: sc2 || null,
          sc3: sc3 || null,
          skill: skill || null,
          skillArr: orderedArr || null,
          searchLength: arrLen,
        },
      }
    }
  }
}
