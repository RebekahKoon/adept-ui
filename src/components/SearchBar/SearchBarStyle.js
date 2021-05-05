import styled from 'styled-components'

const StyledSearchBar = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  position: fixed;
  width: 100%;
  height: 298px;
  left: 0px;
  top: 0px;
  background: #570ff1;
`

export const StyledSearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;

  margin-left: 13.6%;
  margin-right: 16.25%;

  position: static;
  width: 1495px;
  height: 213px;
  left: 0px;
  top: 85px;
`

export const StyledSearchHeaderContainer = styled.div`
  position: static;
  width: 1140px;
  height: 62px;
  left: 150px;
  top: 40px;

  font-family: 'PT Sans', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 62px;

  color: #ffffff;
`

export const StyledSearchBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 20px;

  position: static;
  width: 950px;
  height: 60px;
  left: 150px;
  top: 113px;

  background: #ffffff;
  border: 1px solid #d2d0c9;
  box-sizing: border-box;
  box-shadow: 0px 4px 7px rgba(80, 120, 239, 0.2);
  border-radius: 5px;
`

export const StyledSearchFormContainer = styled.div`
  display: inline-block;
  padding: 0px;

  position: static;
  width: 950px;
  height: 83px;
  left: 210px;
  top: 18px;
`

export const StyledSearchFormInput = styled.input`
  padding: 0px;
  position: static;
  width: 700px;
  height: 24px;
  left: 210px;
  top: 18px;
  border: 0;

  input:focus,
  textarea:focus,
  select:focus {
    outline: none;
  }
`

export const StyledSearchButton = styled.button`
  width: 24px;
  height: 20px;
  background: url('/search.png');
  background-size: cover;
  border: 0;
`

export const StyledSearchIcon = styled.div`
  position: static;
  width: 24px;
  height: 24px;
  left: 886px;
  top: 0px;
  float: right;
`

export const StyledSearchFiller = styled.div`
  position: static;
  height: 21px;
  left: 0px;
  top: 1.5px;

  font-family: PT Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;
  /* identical to box height */

  display: flex;
  align-items: center;

  color: #aeb7d0;
`

export const StyledSearchDivider = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 5px 16px 5px 2px;

  position: static;
  width: 18px;
  height: 43px;
  left: 192px;
  top: 8.5px;
`

export const StyledSearchDividerDiv = styled.div`
  position: static;
  width: 0px;
  height: 42px;
  left: 2px;
  top: 5px;
  border: 1px solid #aeb7d0;
`

export const StyledSearchDropdown = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;

  position: static;
  width: 172px;
  height: 22px;
  left: 20px;
  top: 19px;
`

export const StyledSearchDropdownArrow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;

  position: static;
  width: 22px;
  height: 22px;
  left: 150px;
  top: 0px;
`

export const StyledSearchDropdownText = styled.div`
  position: static;
  width: 23px;
  height: 18px;
  left: 0px;
  top: 2px;

  font-family: PT Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;

  color: #aeb7d0;
`

export default StyledSearchBar
