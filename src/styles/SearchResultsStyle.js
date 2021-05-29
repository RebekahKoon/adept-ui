import styled from 'styled-components'

const StyledSearchResults = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  width: var(--maxWidth);
  left: 0px;
  top: 298.5px;
`

export const SSRSearchResults = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 68%;
  left: 390px;
  top: 16.5px;
`

export const SSRMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 1140px;
  left: 150px;
  top: 40px;
`

export const SSRMainContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  width: 1140px;
  left: 16px;
  top: 44px;
`

export const SSRSearchResultsHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 4rem;
`

export const SSRSortByDropdown = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  height: 1rem;
`

export const SSRFilterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1rem;
`

export const SSRFilterOptions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  left: 0px;
  top: 31px;
`

export const SSRFilterOptionHeader = styled.div`
  font-weight: bold;
`

export const SSRDividerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 270px;
  margin-bottom: 1rem;
`

export const SSRDivider = styled.div`
  width: 190px;
  height: 0px;
  left: 0px;
  top: 20px;

  border: 1px solid #d2d0c9;
`

export const SSRCheckBoxOption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  color: black;
  height: 100%;

  label {
  }
`

export const SkillDropdownContainer = styled.div`
  width: 12rem;
`

export const StyledDropdown = {
  option: (provided) => ({
    ...provided,
    color: '#191C3C',
    backgroundColor: '#FFFFFF',
    '&:hover': {
      backgroundColor: '#EEF2FF',
    },
  }),
  control: (provided) => ({
    ...provided,
    borderRadius: '5px 0px 0px 5px',
    color: '#191C3C',
    boxShadow: 'none',
    border: '0px',
    width: '6.25rem',
    paddingTop: '.5rem',
    paddingBottom: '.5rem',
  }),
  singleValue: (provided) => ({
    ...provided,
    color: '#000000',
  }),
  indicatorSeparator: (base) => ({
    ...base,
    display: 'none',
  }),
  dropdownIndicator: (base, state) => ({
    ...base,
    color: '#311C87',
    transition: 'all .25s ease',
    transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null,
  }),
  menu: (base) => ({
    ...base,
    top: '3rem',
  }),
  container: (base) => ({
    ...base,
    flex: 1,
  }),
}

export const SSRMainContentFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;

  width: 1108px;
  height: 132px;
  left: 16px;
  top: 1057px;
`

export const SSRFooterPagination = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 40px;

  width: 462px;
  height: 132px;
  left: 323px;
  top: 0px;
`

export const SSRFooterPrev = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 19px;

  width: 62px;
  height: 52px;
  left: 40px;
  top: 40px;

  font-size: 1rem;

  :hover {
    cursor: pointer;
    color: var(--darkPurple);
  }
`

export const SSRFooterPageNumber = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 19px;

  width: 200px;
  height: 49px;
  left: 152px;
  top: 41.5px;
`

export const SSRFooterNext = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 19px;

  width: 62px;
  height: 52px;
  left: 360px;
  top: 40px;

  font-size: 1rem;

  :hover {
    cursor: pointer;
    color: var(--darkPurple);
  }
`

export default StyledSearchResults
