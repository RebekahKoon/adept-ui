import styled from 'styled-components'

export const StyledSideBar = styled.div`
  display: flex;
  margin: 0 auto;
  width: 32%;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-right: 2.5rem;
  padding: 2.5rem;
  border: 1px solid var(--lightGray);
  box-shadow: 0px 1px 10px rgba(80, 120, 239, 0.1);
  border-radius: 5px;

  hr {
    display: flex;
    width: 100%;
    margin-top: 2.5rem;
    margin: 2.5rem 0rem 1rem 0rem;
    border: 1px solid var(--lightGray);
  }
`

export default StyledSideBar
