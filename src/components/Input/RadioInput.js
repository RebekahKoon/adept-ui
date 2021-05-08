import React from 'react'
import styled from 'styled-components'

const InputContainer = styled.div`
  display: flex;
  padding-top: 1rem;
  font-size: 0.875rem;
  align-items: center;
`

const Label = styled.label`
  padding-left: 0.5rem;
`

// TODO: make custom radio input
const StyledInput = styled.input``

// props contains all possible input props
export const RadioInput = React.forwardRef((props, ref) => {
  const { id, label, ...rest } = props
  return (
    <InputContainer>
      <StyledInput id={id} ref={ref} {...rest} />
      <Label htmlFor={id}>{label}</Label>
    </InputContainer>
  )
})
