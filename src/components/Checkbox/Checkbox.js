import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'

function Checkbox(props) {
  const state = {
    isChecked: false,
  }

  const toggleCheckboxChange = () => {
    const { handleCheckboxChange, label } = props

    SVGElementInstanceList(({ isChecked }) => ({
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
          onChange={this.toggleCheckboxChange}
        />

        {label}
      </label>
    </div>
  )
}

export default Checkbox
