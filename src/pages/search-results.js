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
  const JobType = ['Full Time', 'Part Time', 'Internship']
  const SalaryRange = ['$0 - $40,000', '$40,000 - $100,000', '$100,000 +']
  const skillArr = props.skillArr
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
      } else if (label == props.skillArr[0]) {
        newHref = removeURLParameter(window.location.href, 'ex1')
        Router.push(newHref)
      } else if (label == props.skillArr[1]) {
        newHref = removeURLParameter(window.location.href, 'ex2')
        Router.push(newHref)
      } else if (label == props.skillArr[2]) {
        newHref = removeURLParameter(window.location.href, 'ex3')
        Router.push(newHref)
      } else if (label == props.skillArr[3]) {
        newHref = removeURLParameter(window.location.href, 'ex4')
        Router.push(newHref)
      } else if (label == props.skillArr[4]) {
        newHref = removeURLParameter(window.location.href, 'ex5')
        Router.push(newHref)
      }
    } else {
      selectedCheckboxes.add(label)
      if (label == 'Full Time' && !props.jt1) {
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
      } else if (label == props.skillArr[0] && !props.ex1) {
        Router.push(window.location.href + '&ex1=' + props.skillArr[0])
      } else if (label == props.skillArr[1] && !props.ex2) {
        Router.push(window.location.href + '&ex2=' + props.skillArr[1])
      } else if (label == props.skillArr[2] && !props.ex3) {
        Router.push(window.location.href + '&ex3=' + props.skillArr[2])
      } else if (label == props.skillArr[3] && !props.ex4) {
        Router.push(window.location.href + '&ex4=' + props.skillArr[3])
      } else if (label == props.skillArr[4] && !props.ex5) {
        Router.push(window.location.href + '&ex5=' + props.skillArr[4])
      }
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
    } else if (
      label == props.skillArr[0] &&
      (label == props.ex1 ||
        label == props.ex2 ||
        label == props.ex3 ||
        label == props.ex4 ||
        label == props.ex5)
    ) {
      selectedCheckboxes.add(label)
      return (
        <Checkbox
          label={label}
          handleCheckboxChange={toggleCheckbox}
          key={label}
          checked="true"
        />
      )
    } else if (
      label == props.skillArr[1] &&
      (label == props.ex1 ||
        label == props.ex2 ||
        label == props.ex3 ||
        label == props.ex4 ||
        label == props.ex5)
    ) {
      selectedCheckboxes.add(label)
      return (
        <Checkbox
          label={label}
          handleCheckboxChange={toggleCheckbox}
          key={label}
          checked="true"
        />
      )
    } else if (
      label == props.skillArr[2] &&
      (label == props.ex1 ||
        label == props.ex2 ||
        label == props.ex3 ||
        label == props.ex4 ||
        label == props.ex5)
    ) {
      selectedCheckboxes.add(label)
      return (
        <Checkbox
          label={label}
          handleCheckboxChange={toggleCheckbox}
          key={label}
          checked="true"
        />
      )
    } else if (
      label == props.skillArr[3] &&
      (label == props.ex1 ||
        label == props.ex2 ||
        label == props.ex3 ||
        label == props.ex4 ||
        label == props.ex5)
    ) {
      selectedCheckboxes.add(label)
      return (
        <Checkbox
          label={label}
          handleCheckboxChange={toggleCheckbox}
          key={label}
          checked="true"
        />
      )
    } else if (
      label == props.skillArr[4] &&
      (label == props.ex1 ||
        label == props.ex2 ||
        label == props.ex3 ||
        label == props.ex4 ||
        label == props.ex5)
    ) {
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

  const createSalRangeCheckboxes = () => SalaryRange.map(createCheckbox)

  const createSkillCheckboxes = () => skillArr.map(createCheckbox)

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
              <form>{createJobTypeCheckboxes()}</form>
            </SSRCheckBoxOption>
          </SSRFilterOptions>
        </SSRFilterSection>
        <SSRFilterSection>
          <SSRDividerContainer>
            <SSRDivider />
          </SSRDividerContainer>
          <SSRFilterOptionHeader>Salary Range</SSRFilterOptionHeader>
          <SSRFilterOptions>
            <SSRCheckBoxOption>
              <form>{createSalRangeCheckboxes()}</form>
            </SSRCheckBoxOption>
          </SSRFilterOptions>
        </SSRFilterSection>
        <SSRFilterSection>
          <SSRDividerContainer>
            <SSRDivider />
          </SSRDividerContainer>
          <SSRFilterOptionHeader>Skill</SSRFilterOptionHeader>
          <SSRFilterOptions>
            <SSRCheckBoxOption>
              <form>{createSkillCheckboxes()}</form>
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
          defaultValue={currOption}
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
        sc1: context.query.sc1 || null,
        sc2: context.query.sc2 || null,
        sc3: context.query.sc3 || null,
        ex1: context.query.ex1 || null,
        ex2: context.query.ex2 || null,
        ex3: context.query.ex3 || null,
        ex4: context.query.ex4 || null,
        ex5: context.query.ex5 || null,
      },
    }
  } else {
    const { data: allJobData } = await client.query({
      query: GET_ALL_JOBS,
    })
    var jt1 = context.query.jt1
    var jt2 = context.query.jt2
    var jt3 = context.query.jt3
    var sc1 = context.query.sc1
    var sc2 = context.query.sc2
    var sc3 = context.query.sc3
    var ex1 = context.query.ex1
    var ex2 = context.query.ex2
    var ex3 = context.query.ex3
    var ex4 = context.query.ex4
    var ex5 = context.query.ex5
    var newArr = allJobData.getAllJobPostings
    var o = context.query.o

    if (jt1) {
      var tempArr = []
      var tempPos = 0
      for (var i = 0; i < newArr.length; i++) {
        if (newArr[i].type == 'FULL_TIME') {
          tempArr[tempPos] = newArr[i]
          tempPos++
        }
      }
      newArr = tempArr
    }
    if (jt2) {
      tempArr = []
      tempPos = 0
      for (i = 0; i < newArr.length; i++) {
        if (newArr[i].type == 'PART_TIME') {
          tempArr[tempPos] = newArr[i]
          tempPos++
        }
      }
      newArr = tempArr
    }
    if (jt3) {
      tempArr = []
      tempPos = 0
      for (i = 0; i < newArr.length; i++) {
        if (newArr[i].type == 'INTERNSHIP') {
          tempArr[tempPos] = newArr[i]
          tempPos++
        }
      }
      newArr = tempArr
    }
    if (sc1) {
      tempArr = []
      tempPos = 0
      for (i = 0; i < newArr.length; i++) {
        if (newArr[i].salary < 40000) {
          tempArr[tempPos] = newArr[i]
          tempPos++
        }
      }
      newArr = tempArr
    }
    if (sc2) {
      tempArr = []
      tempPos = 0
      for (i = 0; i < newArr.length; i++) {
        if (newArr[i].salary >= 40000 && newArr[i].salary < 100000) {
          tempArr[tempPos] = newArr[i]
          tempPos++
        }
      }
      newArr = tempArr
    }
    if (sc3) {
      tempArr = []
      tempPos = 0
      for (i = 0; i < newArr.length; i++) {
        if (newArr[i].salary >= 100000) {
          tempArr[tempPos] = newArr[i]
          tempPos++
        }
      }
      newArr = tempArr
    }
    if (ex1) {
      tempArr = []
      tempPos = 0
      for (i = 0; i < newArr.length; i++) {
        for (var j = 0; j < newArr[i].skillsRequired.length - 1; j++)
          if (newArr[i].skillsRequired[j].name == ex1) {
            tempArr[tempPos] = newArr[i]
            tempPos++
          }
      }
      newArr = tempArr
    }
    if (ex2) {
      tempArr = []
      tempPos = 0
      for (i = 0; i < newArr.length; i++) {
        for (j = 0; j < newArr[i].skillsRequired.length - 1; j++)
          if (newArr[i].skillsRequired[j].name == ex2) {
            tempArr[tempPos] = newArr[i]
            tempPos++
          }
      }
      newArr = tempArr
    }
    if (ex3) {
      tempArr = []
      tempPos = 0
      for (i = 0; i < newArr.length; i++) {
        for (j = 0; j < newArr[i].skillsRequired.length - 1; j++)
          if (newArr[i].skillsRequired[j].name == ex3) {
            tempArr[tempPos] = newArr[i]
            tempPos++
          }
      }
      newArr = tempArr
    }
    if (ex4) {
      tempArr = []
      tempPos = 0
      for (i = 0; i < newArr.length; i++) {
        for (j = 0; j < newArr[i].skillsRequired.length - 1; j++)
          if (newArr[i].skillsRequired[j].name == ex4) {
            tempArr[tempPos] = newArr[i]
            tempPos++
          }
      }
      newArr = tempArr
    }
    if (ex5) {
      tempArr = []
      tempPos = 0
      for (i = 0; i < newArr.length; i++) {
        for (j = 0; j < newArr[i].skillsRequired.length - 1; j++)
          if (newArr[i].skillsRequired[j].name == ex5) {
            tempArr[tempPos] = newArr[i]
            tempPos++
          }
      }
      newArr = tempArr
    }

    if (o !== 'oldest') {
      newArr = newArr.slice().sort((a, b) => b.datePosted - a.datePosted)
    } else {
      newArr = newArr.slice().sort((a, b) => a.datePosted - b.datePosted)
    }

    var skillArr = []
    for (i = 0; i < newArr.length; i++) {
      for (j = 0; j < newArr[i].skillsRequired.length; j++) {
        skillArr.push(newArr[i].skillsRequired[j].name)
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

    if (orderedArr.length > 5) {
      tempArr = []
      for (i = 0; i < 5; i++) {
        tempArr.push(orderedArr[i])
      }
      orderedArr = tempArr
    }

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
          ex1: ex1 || null,
          ex2: ex2 || null,
          ex3: ex3 || null,
          ex4: ex4 || null,
          ex5: ex5 || null,
          skillArr: orderedArr || null,
        },
      }
    } else {
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
          ex1: ex1 || null,
          ex2: ex2 || null,
          ex3: ex3 || null,
          ex4: ex4 || null,
          ex5: ex5 || null,
          skillArr: orderedArr || null,
        },
      }
    }
  }
}
