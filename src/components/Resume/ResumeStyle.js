import styled from 'styled-components'

export const StyledResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* max-width: 47.125rem; */
  align-items: flex-start;
  padding: 0px;
  border: 1px solid var(--lightGray);
  box-shadow: 0px 4px 10px rgba(80, 120, 239, 0.1);
  border-radius: 5px;
  margin-bottom: 2.5rem;
`

export const StyledResumeItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  padding: 40px;
`

export const StyledAddToResumeButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: none;
  color: var(--darkPurple);
  font-weight: bold;
  width: 47rem;
  height: 2.8rem;
  padding: 1rem 0px;
  border: none;
  border-top: 1px solid var(--lightGray);
`

export default StyledResumeContainer
