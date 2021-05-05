import styled from 'styled-components'
import Link from 'next/link'

const StyledLargeButton = styled.button`
  padding: 0.75rem 2rem;
  background: none;
  border: solid 3px var(--white);
  border-radius: 0.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--white);
  :hover {
    cursor: pointer;
    border: solid 3px var(--purple);
    color: var(--purple);
  }
`

const LargeButton = ({ href, children }) => {
  return (
    <Link href={href ?? ''}>
      <StyledLargeButton>{children}</StyledLargeButton>
    </Link>
  )
}

export default LargeButton
