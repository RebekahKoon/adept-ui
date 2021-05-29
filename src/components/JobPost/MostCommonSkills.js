import { JobPostSkill } from '../Skill'
import { StyledSkills } from '../JobCard'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

// Returns an array of n most common skills
// applicants is a JobApplication array that contains user field
const getMostCommonSkills = (applicants, n = 10) => {
  const skillFrequency = new Map()
  for (const applicant of applicants) {
    // We're only concerned about the array of skills on each user
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

const MostCommonSkills = ({ applicants = [], userSkills = [] }) => {
  return (
    <>
      <h2>Most Common Skills of Current Applicants:</h2>
      {applicants.length ? (
        <TransitionGroup component={StyledSkills}>
          {getMostCommonSkills(applicants).map((skill, index) => (
            <CSSTransition key={index} timeout={300} classNames="transition">
              <JobPostSkill
                name={skill}
                hasSkill={userSkills.includes(skill)}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
      ) : (
        'No applicants'
      )}
    </>
  )
}

export default MostCommonSkills
