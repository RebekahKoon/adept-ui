import { StyledJobPostSkill } from './SkillStyle'

const JobPostSkill = ({ name, key }) => {
  return <StyledJobPostSkill key={key}>{name}</StyledJobPostSkill>
}

export default JobPostSkill
