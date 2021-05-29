import { JobPostSkill } from '../Skill'
import { StyledSkills } from '../JobCard'

// Returns an array of n most common skills
// applicants is a JobApplication that contains user field
const getMostCommonSkills = (applicants, n = 10) => {
  const skillFrequency = new Map()
  for (const applicant of applicants) {
    const {
      user: { skills },
    } = applicant
    for (const skill of skills) {
      if (!skillFrequency.get(skill.name)) {
        skillFrequency.set(skill.name, 0)
      }
      skillFrequency.set(skill.name, skillFrequency.get(skill.name) + 1)
    }
  }
  const sortedSkills = new Map(
    [...skillFrequency.entries()].sort((a, b) => b[1] - a[1])
  )
  return Array.from(sortedSkills.keys()).slice(0, n)
}

const MostCommonSkills = ({ applicants = [] }) => {
  return (
    <>
      <h2>Most Common Skills of Current Applicants:</h2>
      <StyledSkills>
        {applicants.length
          ? getMostCommonSkills(applicants).map((skill, index) => (
              <JobPostSkill name={skill} key={index} />
            ))
          : 'No applicants'}
      </StyledSkills>
    </>
  )
}

export default MostCommonSkills
