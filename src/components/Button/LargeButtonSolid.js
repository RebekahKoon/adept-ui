import styled from 'styled-components'
import Link from 'next/link'

export const StyledLargeButtonSolid = styled.button`
  padding: 0.75rem 2rem;
  background: var(--purple);
  border: solid 3px var(--white);
  border-radius: 0.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--white);
  :hover {
    cursor: pointer;
    background: var(--darkPurple);
  }
`

export const LargeButtonSolid = ({ href, children, ...rest }) => {
  return (
    <Link href={href ?? ''}>
      <StyledLargeButtonSolid {...rest}>{children}</StyledLargeButtonSolid>
    </Link>
  )
}
