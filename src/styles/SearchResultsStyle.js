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
  padding: 0px;

  position: static;
  width: 200px;
  height: 191px;
`

export const SSRFilterOptions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  position: static;
  width: 87px;
  height: 160px;
  left: 0px;
  top: 31px;
  background-color: blue;
`

export const SSRCheckBoxOption = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;

  position: static;
  width: 87px;
  height: 40px;
  left: 0px;
  top: 120px;
`
export const SSRCheckBox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`

export const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`

export const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${(props) => (props.checked ? 'salmon' : 'papayawhip')};
  border-radius: 3px;
  transition: all 150ms;

  ${SSRCheckBox}:focus + & {
    box-shadow: 0 0 0 3px pink;
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
  width: 600px;
  height: 964px;
  top: 16.5px;

  background: #ffffff;
  border: 1px solid #d2d0c9;
  box-sizing: border-box;
  box-shadow: 0px 4px 10px rgba(80, 120, 239, 0.1);
  border-radius: 5px;
`
export const SSRSearchResultsHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;

  position: static;
  width: 1108px;
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
  width: 1108px;
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
`

export const SearchResultsParent = styled.div``

export default StyledSearchResults
