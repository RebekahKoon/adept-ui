import styled from 'styled-components'
import Loader from 'react-loader-spinner'
import Link from 'next/link'

export const StyledLargeButtonSolid = styled.button`
  padding: 0.75rem 2rem;
  background: var(--purple);
  border: solid 3px var(--white);
  border-radius: 0.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--white);
  :disabled {
    background: var(--lightGray);
    :hover {
      background: var(--lightGray);
      cursor: default;
    }
  }
  :hover {
    cursor: pointer;
    background: var(--darkPurple);
  }
`

export const LargeButtonSolid = ({ href, loading, children, ...rest }) => {
  return (
    <Link href={href ?? ''}>
      <StyledLargeButtonSolid disabled={loading} {...rest}>
        {loading ? (
          <Loader type="TailSpin" color="#570EF1" height={26} width={26} />
        ) : (
          children
        )}
      </StyledLargeButtonSolid>
    </Link>
  )
}
