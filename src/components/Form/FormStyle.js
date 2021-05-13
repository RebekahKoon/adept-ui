import styled from 'styled-components'

export const FormContainer = styled.div`
  /* display: flex; */
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 2.5rem;
`

export const FormGrid = styled.div`
  margin: 0 auto;
  display: inline-grid;
  text-align: left;
  grid-template-columns: repeat(2, minmax(50px, 600px));
  gap: 1.5rem 2.5rem;
  line-height: 1.25em;
`

export const StyledAddToResumeButton = styled.button`
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

export default FormContainer
