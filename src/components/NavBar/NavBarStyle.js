import styled from 'styled-components'

const StyledNavBar = styled.nav`
  display: flex;
  align-items: center;
  position: fixed;
  transition: 250ms;
  height: 80px;
  width: 100%;
  z-index: 1;
`

export const StyledNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 1rem;
  list-style-type: none;
`

export const StyledNavLogo = styled.div`
  font-size: 1.75rem;
`

export const StyledNavItems = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
`

export const StyledNavItem = styled.li`
  padding-left: 2rem;
  cursor: pointer;
  font-weight: bold;
  text-transform: capitalize;
  color: #ffffff;
`

export default StyledNavBar
