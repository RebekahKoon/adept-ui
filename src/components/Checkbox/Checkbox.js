import React, { Component, useState } from 'react'
import { render } from 'react-dom'

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
    <div className="checkbox">
      <label>
        <input
          type="checkbox"
          value={label}
          checked={isChecked}
          onChange={toggleCheckboxChange}
        />

        {label}
      </label>
    </div>
  )
}

export default Checkbox
