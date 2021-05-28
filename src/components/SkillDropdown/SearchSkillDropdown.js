import { useMutation } from '@apollo/client'
import CreatableSelect from 'react-select/creatable'
import { GET_ALL_SKILLS } from '../../queries/getAllSkills'
import StyledSkillDropdown from './SkillDropdownStyle'

const SearchSkillDropdown = ({
  placeholderText,
  isLoading,
  setIsLoading,
  skills,
  setSkills,
  newSkill,
  setNewSkill,
}) => {
  // Used to determine if the dropdown value has changed
  const handleChange = (newValue, actionMeta) => {
    console.group('Value Changed')
    console.log(newValue)
    console.log(`action: ${actionMeta.action}`)
    console.groupEnd()
    setNewSkill(newValue)
  }

  return (
    <CreatableSelect
      placeholder={placeholderText}
      isClearable
      isDisabled={isLoading}
      isLoading={isLoading}
      onChange={handleChange}
      options={skills}
      value={newSkill}
      styles={StyledSkillDropdown}
    />
  )
}

export default SearchSkillDropdown
