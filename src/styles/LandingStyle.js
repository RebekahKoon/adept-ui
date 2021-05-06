// These are unused. Should be safe to delete.
import styled from 'styled-components'

const StyledHero = styled.div`
  font-family: 'PT Sans', sans-serif;
  font-weight: bold;
  font-size: 84px;
  color: #ffffff;

  padding-left: 10%;
  padding-top: 9%;
  padding-right: 10%;
  padding-bottom: 9%;

  margin-left: 15%;
  margin-bottom: 0px;

  p span {
    display: block;
  }

  #span2 {
    float: right;
    margin-right: 24%;
  }
`

export const StyledDivider = styled.div`
  padding-bottom: 7%;
  hr {
    width: 50%;
    margin: auto;
  }
`

export const StyledImg = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  background: url('/adept-hero.png') no-repeat;
`

export const StyledGetStarted = styled.div`
  height: 50px;
  width: 200px;
  text-align: center;
  margin: auto;

  font-size: 32px;
  color: #ffffff;
  font-family: 'PT Sans', sans-serif;
  border-style: solid;
  border-radius: 12px;
  line-height: 50px;

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

export default StyledHero
