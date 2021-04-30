import styled from 'styled-components';

const StyledFooter = styled.div`
  display: flex;
  position: absolute;
  top: 900px;
  float: right;

  overflow: hidden;

  height: 200px;
  width: 100%;

  background: #191C3C;
`;

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
  color: #FFFFFF;
  text-transform: uppercase;

  background: #191C3C;

  cursor: pointer;
    
  li {
    margin: 0 10px 10px 0;
    text-transform: none;
  }
`;

export const StyledLogo = styled.div`
    padding: 10%;
    flex: 1 10%;
`;

export const StyledRow1 = styled.div`
  font-size: 14px;
  flex: 2 20%;
  margin-top: 30px;
`;

export const StyledRow2 = styled.div`
  font-size: 14px;
  flex: 3 20%;
  margin-top: 5px;

`;

export const StyledRow3 = styled.div`
  font-size: 14px;
  flex: 4 20%;
  margin-top: 5px;
`;

export const StyledLinks = styled.div`
  //padding: 10%;
  flex: 5 20%;
  margin-top: 50px;
`;

export const StyledUl = styled.ul`
  list-style-type: none;
  margin-bottom: 10px;
`;

export const StyledLi = styled.li`

`;

export const StyledLiHeader = styled.li`
  margin: 0 10px 10px 0;
  color: #919496;
`;



export default StyledFooter;