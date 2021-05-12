import styled from 'styled-components'

const StyledSearchResults = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 40px 0px 128px;

  position: static;
  width: var(--maxWidth);
  height: 1357px;
  left: 0px;
  top: 298.5px;
`

export const SSRMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 16px;

  position: static;
  width: 1140px;
  height: 1189px;
  left: 150px;
  top: 40px;
  margin-left: 57rem;
`

export const SSRMainContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 16.5px 0px;

  position: static;
  width: 1108px;
  height: 997px;
  left: 16px;
  top: 44px;
`

export const SSRFilterSideBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  float: right;
  margin-right: 5rem;

  position: static;
  width: 280px;
  height: 733px;

  background: #ffffff;
  border: 1px solid #d2d0c9;
  box-sizing: border-box;
  box-shadow: 0px 4px 10px rgba(80, 120, 239, 0.1);
  border-radius: 5px;
`
export const SSRFilterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 200px;
  height: 191px;
`

export const SSRFilterOptions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  position: static;
  width: 200px;
  height: 160px;
  left: 0px;
  top: 31px;
`

export const SSRFilterOptionHeader = styled.div`
  font-weight: bold;
`

export const SSRCheckBoxOption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  color: black;
  height: 100%;

  label {
    margin-top: 1.5rem;
  }
`

export const SSRDividerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 0px;

  position: static;
  width: 270px;
  height: 40px;
  left: 40px;
  top: 462px;
`

export const SSRDivider = styled.div`
  position: static;
  width: 190px;
  height: 0px;
  left: 0px;
  top: 20px;

  border: 1px solid #d2d0c9;
`

export const SSRCheckBox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`

export const CheckboxLabel = styled.div`
  margin-top: 2rem;
`

export const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`

export const StyledCheckbox = styled.div`
  display: flex;
  width: 16px;
  height: 16px;
  background: ${(props) => (props.checked ? '#570FF1' : 'white')};
  border-radius: 3px;
  border: 2px solid black;
  transition: all 150ms;
  margin-right: 1rem;

  ${SSRCheckBox}:focus + & {
    box-shadow: 0 0 0 3px black;
  }

  ${Icon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
  }
`

export const SSRSearchResults = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  position: static;
  width: 718px;
  height: 964px;
  left: 390px;
  top: 16.5px;
`
export const SSRSearchResultDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;

  position: static;
  width: 590px;
  height: 211px;
  left: 0px;
  top: 753px;
  margin-bottom: 1.5rem;

  background: #ffffff;
  border: 1px solid #d2d0c9;
  box-sizing: border-box;
  box-shadow: 0px 4px 10px rgba(80, 120, 239, 0.1);
  border-radius: 5px;
`

export const SSRSearchResultFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  align-items: center;
  padding: 0px;

  position: static;
  width: 500px;
  height: 32px;
  left: 40px;
  top: 139px;
`

export const SSRSkillsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;

  position: static;
  width: 278px;
  height: 32px;
  left: 0px;
  top: 0px;
`

export const SSRDate = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px;

  position: static;
  width: 100px;
  height: 16px;
`

export const SSRSearchResultContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px;

  position: static;
  width: 505px;
  height: 59px;
  left: 40px;
  top: 40px;
`

export const SSRSearchResultLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0px;

  position: static;
  width: 200px;
  height: 20px;
`

export const SSRSearchResultContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  position: static;
  width: 400px;
  height: 59px;
  left: 0px;
  top: 0px;
`

export const SSRJobInfoAndLogo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;

  position: static;
  width: 483px;
  height: 59px;
  left: 0px;
  top: 0px;
`

export const SSRMainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  position: static;
  width: 395px;
  height: 59px;
  left: 88px;
  top: 0px;
`

export const SSRSkillDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  margin-right: 1rem;

  width: 104px;
  height: 32px;
  left: 358px;
  top: 1942px;
  background: rgba(80, 120, 239, 0.1);
  border-radius: 15px;
`

export const SSRJobLogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px 40px 0px 0px;

  font-size: 2.5rem;

  position: static;
  width: 100px;
  height: 100px;
  left: 0px;
  top: 0px;
`

export const SSRJobTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-weight: bold;
  align-items: center;
  padding: 0px;

  position: static;
  width: 67px;
  height: 25px;
  left: 0px;
  top: 0px;
`

export const SSRJobInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  position: static;
  width: 395px;
  height: 24px;
  left: 0px;
  top: 35px;
`

export const SSRJobButton = styled.button`
  background: transparent;
  border: none;
  font-size: 1.25rem;
`

export const SSRCompanyContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;

  position: static;
  width: 395px;
  height: 24px;
  left: 0px;
  top: 0px;
`

export const SSRCompanyTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;

  position: static;
  width: 395px;
  height: 24px;
  left: 0px;
  top: 0px;
`

export const SSRSearchResultsHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;

  position: static;
  width: 1095px;
  height: 28px;
`

export const SSRSortByDropdown = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;

  position: static;
  width: 131px;
  height: 22px;
  max-width: var(--maxWidth);
  margin-right: 11.25%;
`

export const SSRMainContentFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;

  position: static;
  width: 908px;
  height: 132px;
  left: 16px;
  top: 1057px;
`

export const SSRPagination = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 40px;

  position: static;
  width: 462px;
  height: 132px;
  left: 323px;
  top: 0px;
`

export const SSRPagePrev = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 19px;

  position: static;
  width: 62px;
  height: 52px;
  left: 40px;
  top: 40px;

  background: none;
  border: 0;
`

export const SSRPageNumber = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 40px;

  position: static;
  width: 462px;
  height: 132px;
  left: 323px;
  top: 0px;
`

export const SSRPageNext = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 19px;

  position: static;
  width: 62px;
  height: 52px;
  left: 360px;
  top: 40px;

  background: none;
  border: 0;
`

export const SearchResultsParent = styled.div``

export default StyledSearchResults
