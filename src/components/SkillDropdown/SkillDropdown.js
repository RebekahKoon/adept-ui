import { useMutation } from '@apollo/client'
import CreatableSelect from 'react-select/creatable'
import { GET_ALL_SKILLS } from '../../queries/getAllSkills'
import { CREATE_SKILL } from '../../queries/createSkill'
import StyledSkillDropdown from './SkillDropdownStyle'

const createOption = (label) => ({
  label,
  value: label.toLowerCase().replace(/\W/g, ''),
})

const SkillDropdown = ({
  placeholderText,
  isLoading,
  setIsLoading,
  skills,
  setSkills,
  newSkill,
  setNewSkill,
}) => {
  // Mutation for creating a new skill
  const [createSkill, { loading, error }] = useMutation(CREATE_SKILL, {
    onCompleted({ createSkill }) {
      if (createSkill) {
        setSkills([
          ...skills,
          { name: createSkill.skillId, label: createSkill.name },
        ])
        setNewSkill({ name: createSkill.skillId, label: createSkill.name })
      }
    },
    onError(e) {
      console.log(e)
    },
    refetchQueries: [
      {
        query: GET_ALL_SKILLS,
      },
    ],
    awaitRefetchQueries: true,
  })

  // Used to determine if the dropdown value has changed
  const handleChange = (newValue, actionMeta) => {
    console.group('Value Changed')
    console.log(newValue)
    console.log(`action: ${actionMeta.action}`)
    console.groupEnd()
    setNewSkill(newValue)
  }

  // Creating a new value for the dropdown and adding it to the database
  const handleCreate = (newValue) => {
    setIsLoading(true)
    console.group('Option created')
    console.log('Wait a moment...')
    setTimeout(() => {
      const newOption = createOption(newValue)
      console.log(newOption)
      console.groupEnd()
      setIsLoading(false)

      createSkill({ variables: { name: newValue } })
    }, 1000)
  }

  return (
    <CreatableSelect
      placeholder={placeholderText}
      isClearable
      isDisabled={isLoading}
      isLoading={isLoading}
      onChange={handleChange}
      onCreateOption={handleCreate}
      options={skills}
      value={newSkill}
      styles={StyledSkillDropdown}
    />
  )
}

export default SkillDropdown
