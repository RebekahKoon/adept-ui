import styled from 'styled-components'

const StyledFooter = styled.div`
  display: flex;
  position: absolute;
  top: 900px;
  bottom: 0;
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
  margin-left: 17%;
  margin-right: 16.25%;
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
  margin-left: 12%;
  margin-top: 50px;
`

export const StyledColumn = styled.div`
  font-size: 14px;
  flex: ${(props) => props.columnNumber} 20%;
  margin-top: 30px;
`

export const StyledLink = styled.div`
  margin-left: 20px;
  margin-top: 50px;
`

export const StyledLinkContainer = styled.div`
  flex: 5 20%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 50px;
  margin-right: 13%;
  margin-bottom: 50px;
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
