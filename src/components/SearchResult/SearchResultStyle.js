import styled from 'styled-components'

const SSRSearchResultDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;

  width: 100%;
  height: 12rem;
  left: 0px;
  top: 753px;
  margin-bottom: 1.5rem;

  background: #ffffff;
  border: 1px solid #d2d0c9;
  box-sizing: border-box;
  box-shadow: 0px 4px 10px rgba(80, 120, 239, 0.1);
  border-radius: 5px;
`

export const SSRSearchResultContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px;

  width: 100%;
  height: 59px;
  left: 40px;
  top: 40px;
`

export const SSRSearchResultContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  width: 600px;
  height: 59px;
  left: 0px;
  top: 0px;
`

export const SSRJobInfoAndLogo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;

  width: 483px;
  height: 59px;
  left: 0px;
  top: 0px;
`

export const SSRJobLogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px 40px 0px 0px;

  font-size: 2.5rem;

  height: 100px;
  left: 0px;
  top: 0px;
`
export const SSRMainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  height: 59px;
  left: 88px;
  top: 0px;
`
export const SSRJobTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-weight: bold;
  align-items: center;
  padding: 0px;

  height: 25px;
  left: 0px;
  top: 0px;
`
export const SSRJobInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  height: 24px;
  left: 0px;
  top: 35px;
`
export const SSRCompanyContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;

  height: 24px;
`

export const SSRCompanyTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  margin-top: 0.25rem;
  height: 24px;
`

export const SSRCompanyText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 4rem;
  margin-top: 1rem;
  width: 5rem;
  white-space: nowrap;

  p {
    margin-left: 0.25rem;
    overflow: hidden;
    text-overflow: ellipsis;
    :hover {
      white-space: normal;
      //width: 10rem;
      background-color: white;
      overflow: visible;
      z-index: 11;
    }
  }
`

export const SSRSearchResultLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0px;

  margin-left: 3%;
  width: 100%;
  height: 20px;
`
export const SSRJobButton = styled.button`
  background: transparent;
  border: none;
  font-size: 1rem;

  :hover {
    cursor: pointer;
    border: solid 1px var(--darkPurple);
    color: var(--darkPurple);
  }
`

export const SSRSearchResultFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  align-items: center;
  padding: 0px;

  width: 100%;
  height: 32px;
  left: 40px;
  top: 139px;
`

export const SSRSkillsContainer = styled.div`
  display: flex;
  flex: 1 75%;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;

  //width: 300px;
  height: 32px;
  left: 0px;
  top: 0px;
`

export const SSRSkillDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  margin-right: 1rem;

  //width: 104px;
  height: 32px;
  margin-top: 1.5rem;
  background: rgba(80, 120, 239, 0.1);
  border-radius: 15px;
`

export const SSRDate = styled.div`
  display: flex;
  flex: 2 20%;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px;
  margin-top: 1.5rem;
  height: 16px;
`
export default SSRSearchResultDiv
