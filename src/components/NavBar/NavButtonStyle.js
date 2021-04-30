import styled from 'styled-components'

const StyledNavButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  height: 100%;
  width: 100px;
  cursor: pointer;

  font-size: 16px;
  font-weight: bold;
  text-transform: capitalize;
  color: #ffffff;
  font-family: 'PT Sans', sans-serif;

  a {
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  a:active {
    text-decoration: underline;
    color: hotpink;
  }
`

export const StyledLogin = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: static;
  width: 70px;
  height: 29px;
  left: 206px;
  top: 0px;

  border: 1px solid #FFFFFF;
  box-sizing: border-box;
  border-radius: 6px;

  a {
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  a:active {
    text-decoration: underline;
    color: hotpink;
  }
`

export default StyledNavButton
