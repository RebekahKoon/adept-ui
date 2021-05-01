/* eslint-disable no-unused-vars */

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
  padding: 40px 150px;

  position: static;
  width: 1440px;
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

font-family: PT Sans;
font-style: normal;
font-weight: bold;
font-size: 48px;
line-height: 62px;

color: #FFFFFF;
`;

export const StyledSearchBarContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 0px 20px;

position: static;
width: 1140px;
height: 60px;
left: 150px;
top: 113px;

background: #FFFFFF;
border: 1px solid #D2D0C9;
box-sizing: border-box;
box-shadow: 0px 4px 7px rgba(80, 120, 239, 0.2);
border-radius: 5px;

`;

export default StyledSearchBar;