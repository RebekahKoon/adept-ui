import styled from 'styled-components'

export const FooterStyles = styled.footer`
  background: var(--darkerPurple);
  display: flex;
  h2 {
    margin: 1.25rem 0;
    font-size: 0.75rem;
    color: #919496;
  }
`

export const StyledFooterContainer = styled.div`
  display: flex;

  @media (max-width: 690px) {
    flex-direction: column;
  }
  padding: 50px 0 30px 0;
  width: 100%;
  font-size: 24px;
  color: var(--white);
  justify-content: space-between;
`

export const StyledFooterNav = styled.div`
  display: flex;
`

export const StyledLogo = styled.div`
  line-height: 1.6;
  font-size: 1.75rem;
`

// Can't use css variables in media query
export const StyledColumn = styled.div`
  @media (max-width: 976px) {
    min-width: auto;
  }
  min-width: 195px;
  padding: 0 16px 30px 16px;
`

export const StyledFooterIconsColumn = styled(StyledColumn)`
  @media (max-width: 976px) {
    width: 195px;
  }
  display: flex;
  justify-content: space-between;
  padding-top: 1.25rem;
`

export const StyledUl = styled.ul`
  font-size: 0.875rem;
  list-style-type: none;
  padding: 0;
  margin: 0;
  li {
    padding-bottom: 1rem;
    text-transform: none;
  }
`
