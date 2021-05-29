import styled from 'styled-components'
import Link from 'next/link'

export const StyledButtonSolid = styled.button`
  padding: 0.375 1rem;
  background-color: var(--purple);
  border: none;
  border-radius: 0.3125rem;
  font-size: 1rem;
  font-weight: bold;
  color: var(--white);
  padding: 0.375rem 1rem;
  :disabled {
    background: var(--lightGray);
    :hover {
      background: var(--lightGray);
      cursor: default;
    }
  }
  :hover {
    cursor: pointer;
    background-color: #4510b7;
    /* border: solid 1px var(--darkPurple);
    color: var(--darkPurple); */
  }
`

export const ButtonSolid = ({ href, children, ...rest }) => {
  return (
    <Link href={href ?? ''}>
      <StyledButtonSolid {...rest}>{children}</StyledButtonSolid>
    </Link>
  )
}
