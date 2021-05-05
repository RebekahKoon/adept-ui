import styled from 'styled-components'
import { LargeButton } from '../../components/Button'

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
  width: var(--maxWidth);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 1rem;
`

const HeroMessage = styled.h1`
  width: 100%;
  text-align: ${(props) => props.textAlign};
  font-size: 96px;
  color: var(--white);
  margin: 1rem;
`

const Break = styled.hr`
  width: 50%;
  color: var(--white);
  opacity: 75%;
  border: none;
  border-top: solid 1px var(--white);
  height: 3px double var(--white);
  margin-top: 2rem;
  margin-bottom: 3rem;
`

const HeroContent = () => {}

const Hero = () => {
  return (
    <StyledHero>
      <StyledHeroContent>
        <HeroMessage textAlign="left">Start your journey to</HeroMessage>
        <HeroMessage textAlign="right">become an expert</HeroMessage>
        <Break />
        <LargeButton href="/">Get Started</LargeButton>
      </StyledHeroContent>
    </StyledHero>
  )
}

export default Hero
