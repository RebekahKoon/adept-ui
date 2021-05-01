import styled from 'styled-components'

const StyledNavBar = styled.nav`
  display: flex;
  align-items: center;
  position: fixed;
  float: right;

  transition: 250ms;

  overflow: hidden;

  height: 80px;
  width: 100%;
`

export const StyledNavContainer = styled.div`
  display: flex;
  align-items: center;

  height: 60px;
  width: 100%;

  margin-left: 150px;
  margin-right: 150px;
  padding:5%;

  list-style-type: none;
`

export const StyledNavLogo = styled.div`
  font-family: 'PT Sans', sans-serif;
  width: 1085px;
  font-size: 40px;
  color: #FFFFFF;
  margin-left: 80px;

  a {
    color: #FFFFFF;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`

export const StyledNavButtons = styled.div`
  display: flex;
  justify-content: center;
  flex: 2 33%;

  height: 40px;
  width: 100%;

  a {
    color: inherit;
    text-decoration: none;
  }
`

export default StyledNavBar
