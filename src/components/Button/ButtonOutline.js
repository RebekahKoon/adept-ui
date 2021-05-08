import styled from 'styled-components'
import Link from 'next/link'

const StyledButtonOutline = styled.button`
  padding: 0.25rem 1rem;
  background: none;
  border: solid 1px var(--white);
  border-radius: 0.375rem;
  font-size: 1rem;
  font-weight: bold;
  color: var(--white);
  :hover {
    cursor: pointer;
    border: solid 1px var(--darkPurple);
    color: var(--darkPurple);
  }
`

const ButtonOutline = ({ href, children }) => {
  return (
    <Link href={href ?? ''}>
      <StyledButtonOutline>{children}</StyledButtonOutline>
    </Link>
  )
}

export default ButtonOutline
