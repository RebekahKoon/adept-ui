import styled from 'styled-components'

export const StyledSkillList = styled.div`
  display: block;
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 1rem;

  .transition-enter {
    opacity: 0.01;
    transform: translate(0, -10px);
  }

  .transition-enter-active {
    opacity: 1;
    transform: translate(0, 0);
    transition: all 150ms ease-in;
  }

  .transition-exit {
    opacity: 1;
    transform: translate(0, 0);
  }

  .transition-exit-active {
    opacity: 0.01;
    transform: translate(0, 10px);
    transition: all 150ms ease-in;
  }
`
