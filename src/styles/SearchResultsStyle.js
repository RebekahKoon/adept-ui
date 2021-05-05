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
export const SearchResultsParent = styled.div``

export default StyledSearchResults
