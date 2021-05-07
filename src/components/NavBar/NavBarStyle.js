import styled from 'styled-components'

const StyledNavBar = styled.nav`
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 1;

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

  margin-left: 16.25%;
  margin-right: 16.25%;

  list-style-type: none;
`

export const StyledNavLogo = styled.div`
  flex: 1 20%;
  font-family: 'PT Sans', sans-serif;
  width: 1085px;
  font-size: 40px;
  color: #ffffff;
  margin-left: 12%;

  a {
    color: #ffffff;
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
