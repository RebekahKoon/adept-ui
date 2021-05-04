import styled from 'styled-components'

const StyledFooter = styled.div`
  display: flex;
  position: absolute;
  top: 900px;
  float: right;

  overflow: hidden;

  height: 200px;
  width: 100%;

  background: #191c3c;
`

export const StyledFooterContainer = styled.div`
  display: flex;
  bottom: 0;
  float: right;
  align-items: center;
  height: 200px;
  width: 100%;
  margin-left: 150px;
  margin-right: 150px;
  font-family: 'PT Sans', sans-serif;
  font-size: 24px;
  color: #ffffff;
  text-transform: uppercase;

  background: #191c3c;

  cursor: pointer;

  li {
    margin: 0 10px 10px 0;
    text-transform: none;
  }
`

export const StyledLogo = styled.div`
  flex: 1 10%;
  font-family: 'PT Sans', sans-serif;
  font-size: 30px;
  color: #ffffff;
  margin-left: 175px;
`

export const StyledColumn = styled.div`
  font-size: 14px;
  flex: ${(props) => props.columnNumber} 20%;
  margin-top: 30px;
`

export const StyledLinks = styled.div`
  //padding: 10%;
  flex: 5 20%;
  margin-top: 50px;
`

export const StyledUl = styled.ul`
  list-style-type: none;
  margin-bottom: 10px;
`

export const StyledLi = styled.li``

export const StyledLiHeader = styled.li`
  margin: 0 10px 10px 0;
  color: #919496;
`

export default StyledFooter
