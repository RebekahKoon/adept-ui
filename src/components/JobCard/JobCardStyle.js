import styled from 'styled-components'
import {
  StyledEducationContainer,
  StyledEducationContent,
  StyledEducation,
  StyledEducationText,
} from '../Education/EducationStyle'

export const StyledJobCardContainer = styled(StyledEducationContainer)``
export const StyledJobCardContent = styled(StyledEducationContent)``

export const StyledTitleLine = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;

  .fa-arrow-circle-right {
    margin-left: 0.25rem;
  }
`

export const StyledViewJob = styled.section`
  display: block;
  margin-top: 0.5rem;
  align-items: right;
  justify-content: flex-end;
  line-height: 0.25rem;
  a {
    color: var(--darkPurple);
    :hover {
      text-decoration: underline;
    }
  }
`

export const StyledJobCardTop = styled(StyledEducation)`
  align-items: center;
  width: 100%;

  h3 {
    line-height: 0.25rem;
  }

  .fa-asymmetrik {
    color: #585858;
    display: inline-block;
    vertical-align: top;
  }
`

export const StyledJobCardBottom = styled.div`
  width: 90%;
  margin-top: 1.5rem;
  display: flex;
  flex-direction: row;
`

export const StyledDescriptionCol = styled.div`
  display: flex;
  flex-direction: row;
`

export const StyledJobCardText = styled(StyledEducationText)`
  display: flex;
  margin-left: 1.25rem;

  h3 {
    color: var(--black);
  }
`

export const StyledJobCardGrid = styled.div`
  width: 100%;
  display: flex;
  margin: 0 auto;
  flex-basis: calc(100% / 4);
`

export const StyledGridItem = styled.section`
  display: flex;
  justify-content: left;
  align-items: center;
  flex-direction: row;
  margin-right: 1rem;

  .fa-briefcase {
    margin-right: 0.4rem;
  }
  .fa-map-marker-alt {
    margin-right: 0.4rem;
  }
  .fa-clock {
    margin-right: 0.4rem;
  }
  .fa-dollar-sign {
    margin-right: 0.4rem;
  }
`

export const StyledSkills = styled.div`
  display: block;
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
`

export const StyledDate = styled.div`
  margin-left: auto;
  margin-right: 0;
  float: right;
  align-items: right;
`

export default StyledJobCardContainer
