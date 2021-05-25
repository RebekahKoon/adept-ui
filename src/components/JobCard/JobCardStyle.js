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
  justify-content: space-between;
  /* padding-right: 2.5rem; */

  .fa-arrow-circle-right {
    margin-left: 0.25rem;
  }
`

export const StyledJobCardTop = styled(StyledEducation)`
  align-items: center;

  h3 {
    line-height: 0.25rem;
  }

  .fa-briefcase {
    margin-right: 0.25rem;
  }
  .fa-map-marker-alt {
    margin-right: 0.25rem;
  }
  .fa-clock {
    margin-right: 0.25rem;
  }
  .fa-dollar-sign {
    margin-right: 0.25rem;
  }
  .fa-asymmetrik {
    color: #585858;
    display: inline-block;
    vertical-align: top;
  }
`

export const StyledJobCardBottom = styled.div`
  width: 85%;
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

  h3 {
    color: var(--black);
  }
`

export const StyledJobCardGrid = styled.div`
  width: 85%;
  display: inline-grid;
  text-align: left;
  grid-template-columns: repeat(4, minmax(50px, 600px));
  height: 100%;
  gap: 1rem 1rem;
  line-height: 1.25em;
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
