import styled from 'styled-components'
import { ButtonSolid, LargeButtonSolid } from '../components/Button'

export const JobPostContainer = styled.div`
  margin-top: 5rem;
  padding: 2.5rem;
  min-height: 80vh;
  width: 100%;
`

export const JobPostHeader = styled.header`
  h2 {
    color: var(--purple);
  }
`

export const CompanyLogo = styled.section`
  padding-bottom: 2.5rem;
`

export const PostedBySection = styled.section`
  padding-top: 2.5rem;
  padding-bottom: 1rem;
  display: flex;
  align-items: center;
  span {
    padding-right: 1rem;
  }
`

export const DescriptionSection = styled.section`
  padding-bottom: 2.5rem;
  line-height: 1.5;
`

export const SubSection = styled.section`
  padding-bottom: 2.5rem;
`

export const ConnectButton = styled(ButtonSolid)`
  border-radius: 1rem;
  font-size: 0.875rem;
`

export const AppliedIcon = styled.span`
  padding-left: 1rem;
  color: green;
`

export const SideBar = styled.div`
  width: 33%;
`

export const ApplicantsContainer = styled.div`
  padding: 2.5rem;
  border: 1px solid var(--lightGray);
  box-shadow: 0px 1px 10px rgba(80, 120, 239, 0.1);
  border-radius: 5px;
`

export const JobPostFlexContainer = styled.section`
  display: flex;
  justify-content: space-between;
`

export const JobPostContent = styled.div`
  width: 60%;
`

export const ApplyButton = styled(LargeButtonSolid)`
  width: 150px;
`

export const FullPageLoadContainer = styled.div`
  width: 100%;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ConnectButtonWrapper = styled.span`
  display: flex;
  justify-content: center;
  width: 95px;
`
