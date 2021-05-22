import styled from 'styled-components'

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

export const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`

export const StyledCheckbox = styled.div`
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  margin-top: 0.75rem;
  margin-right: 0.5rem;
  background: ${(props) => (props.checked ? '#570FF1' : '#FFFFFF')};
  border-radius: 3px;
  border: 3px solid black;
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px black;
  }

  ${Icon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
  }
`

export const CheckboxContainer = styled.div``

export default HiddenCheckbox
