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
  margin-bottom: 2.5rem;
`

export const StyledEducationContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  padding: 40px;

  h1 {
    line-height: 2rem;
  }
`

export const StyledEducationGrid = styled.div`
  margin: 0 auto;
  display: inline-grid;
  text-align: left;
  grid-template-columns: repeat(2, minmax(50px, 600px));
  gap: 2.5rem 1.5rem;
  line-height: 1.25em;
`

export const StyledEducation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  text-align: left;
  line-height: 1.4em;

  .fa-graduation-cap {
    color: #585858;
    display: inline-block;
    vertical-align: top;
  }
`

export const StyledEducationText = styled.div`
  display: flex;
  flex-direction: column;
  color: #585858;
  margin-left: 1rem;

  b {
    color: #000000;
  }

  small {
    line-height: 1.4em;
  }
`

export const StyledAddEducationButton = styled.button`
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
