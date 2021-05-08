import styled from 'styled-components'

export const StyledDashboardBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 2.5rem 0px 8rem;
`

export const StyledResume = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  border-radius: 5px;
`

export const StyledSideBar = styled.div`
  max-width: 22rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: flex-start;
  margin-right: 2.5rem;
  padding: 2.5rem;
  border: 1px solid var(--lightGray);
  box-shadow: 0px 1px 10px rgba(80, 120, 239, 0.1);
  border-radius: 5px;
`

export default StyledDashboardBody
