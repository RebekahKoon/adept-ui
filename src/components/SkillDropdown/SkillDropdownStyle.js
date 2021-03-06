// Styling for the skill dropdown menu
const StyledSkillDropdown = {
  option: (provided) => ({
    ...provided,
    color: '#191C3C',
    backgroundColor: '#FFFFFF',
    '&:hover': {
      backgroundColor: '#EEF2FF',
    },
  }),
  control: (provided) => ({
    ...provided,
    borderRadius: '5px',
    color: '#191C3C',
    boxShadow: 'none',
    border: '1px solid #D2D0C9',
    width: '100%',
    marginRight: '.5rem',
  }),
  singleValue: (provided) => ({
    ...provided,
    color: '#191C3C',
  }),
  indicatorSeparator: (base) => ({
    ...base,
    display: 'none',
  }),
  dropdownIndicator: (base, state) => ({
    ...base,
    color: '#311C87',
    transition: 'all .25s ease',
    transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null,
  }),
  menu: (base) => ({
    ...base,
    width: '100%',
  }),
  container: (base) => ({
    ...base,
    flex: 1,
  }),
}

export default StyledSkillDropdown
