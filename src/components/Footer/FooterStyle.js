import styled from 'styled-components'

export const FooterStyles = styled.footer`
  background: var(--darkerPurple);
  h2 {
    margin: 1.25rem 0;
    font-size: 0.75rem;
    color: #919496;
  }
`

export const StyledFooterContainer = styled.div`
  display: flex;
  padding: 50px 16px 30px 16px;
  width: 100%;
  font-size: 24px;
  color: var(--white);
  justify-content: space-between;
`

export const StyledFooterNav = styled.div`
  display: flex;
`

export const StyledLogo = styled.div`
  font-size: 1.75rem;
`

export const StyledColumn = styled.div`
  width: 195px;
  padding: 0 16px 30px 16px;
`

export const StyledFooterIconsColumn = styled(StyledColumn)`
  display: flex;
  justify-content: space-between;
  font-size: 2rem;
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
