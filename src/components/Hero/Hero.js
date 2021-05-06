import styled from 'styled-components'
import { LargeButtonOutline } from '../../components/Button'
import MainContentContainer from '../styles/MainContentContainer'

const StyledHero = styled.div`
  background-image: url('/adept-hero.png');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const StyledHeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
`

const HeroMessage = styled.h1`
  width: 100%;
  text-align: ${(props) => props.textAlign};
  font-size: 96px;
  color: var(--white);
  margin: 1rem 0;
`

const Divider = styled.hr`
  width: 50%;
  color: var(--white);
  opacity: 75%;
  border: none;
  border-top: solid 1px var(--white);
  height: 3px double var(--white);
  margin-top: 2rem;
  margin-bottom: 3rem;
`

const Hero = () => {
  return (
    <StyledHero>
      <MainContentContainer>
        <StyledHeroContent>
          <HeroMessage textAlign="left">Start your journey to</HeroMessage>
          <HeroMessage textAlign="right">become an expert</HeroMessage>
          <Divider />
          <LargeButtonOutline href="/">Get Started</LargeButtonOutline>
        </StyledHeroContent>
      </MainContentContainer>
    </StyledHero>
  )
}

export default Hero
