import React, { useState } from 'react'
import HiddenCheckbox from './CheckboxStyle'

import { StyledCheckbox, CheckboxContainer, Icon } from './CheckboxStyle'

function Checkbox(props) {
  const [state, setState] = useState({
    isChecked: false,
  })

  const toggleCheckboxChange = () => {
    const { handleCheckboxChange, label } = props

    setState(({ isChecked }) => ({
      isChecked: !isChecked,
    }))
    handleCheckboxChange(label)
  }

  const { label } = props

  const { isChecked } = state

  return (
    <CheckboxContainer className="checkbox">
      <HiddenCheckbox
        checked={isChecked}
        onChange={toggleCheckboxChange}
        {...props}
      />
      <StyledCheckbox
        checked={isChecked}
        onClick={toggleCheckboxChange}
        value={label}
      >
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>

      {label}
    </CheckboxContainer>
  )
}

export default Checkbox
