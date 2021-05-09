import styled from 'styled-components'

export const StyledEducationContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  border: 1px solid var(--lightGray);
  box-shadow: 0px 4px 10px rgba(80, 120, 239, 0.1);
  border-radius: 5px;
`

export const StyledEducation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  padding: 40px;
`

export const StyledAddSchoolButton = styled.button`
  width: 100%;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  background: none;
  color: var(--darkPurple);
  font-weight: bold;
  height: 2.8rem;
  padding: 1rem 0px;
  border: none;
  border-top: 1px solid var(--lightGray);
`

export default StyledEducationContainer
