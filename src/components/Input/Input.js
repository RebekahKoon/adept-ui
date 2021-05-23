import React from 'react'
import styled from 'styled-components'

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 2.5rem;
  font-size: 0.875rem;
`

const Label = styled.label`
  color: ${(props) => (props.isInvalid ? `red` : `var(--black)`)};
`

const StyledInput = styled.input`
  border: none;
  border-bottom: 2px solid var(--lightGray);
  height: 2.5rem;
  :focus {
    outline: none;
    border: none;
    border-bottom: 2px solid var(--purple);
  }
`

// props contains all possible input props
export const Input = React.forwardRef((props, ref) => {
  const { id, label, isInvalid, noPadding, ...rest } = props
  return (
    <InputContainer style={noPadding && { padding: '0' }}>
      <Label htmlFor={id} isInvalid={isInvalid}>
        {isInvalid?.message ? isInvalid.message : label}
      </Label>
      <StyledInput id={id} ref={ref} {...rest} />
    </InputContainer>
  )
})
