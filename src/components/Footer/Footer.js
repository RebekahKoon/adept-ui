import '@fortawesome/fontawesome-free'
import '@fortawesome/fontawesome-free/js/brands'
import {
  FooterStyles,
  StyledFooterContainer,
  StyledLogo,
  StyledColumn,
  StyledUl,
  StyledFooterNav,
  StyledFooterIconsColumn,
} from './FooterStyle.js'
import MainContentContainer from '../styles/MainContentContainer.js'

const Footer = () => (
  <FooterStyles>
    <MainContentContainer>
      <StyledFooterContainer>
        <StyledFooterNav>
          <StyledColumn>
            <StyledLogo>Adept</StyledLogo>
          </StyledColumn>

          <StyledColumn>
            <StyledUl>
              <h2>FOR JOB SEEKERS</h2>
              <li>Browse Jobs</li>
              <li>Browse Contacts</li>
              <li>Skills</li>
              <li>Visualize Data</li>
            </StyledUl>
          </StyledColumn>

          <StyledColumn>
            <StyledUl>
              <h2>FOR EMPLOYERS</h2>
              <li>Post a Job</li>
              <li>View Posted Jobs</li>
              <li>View Applicants</li>
              <li>Contacts</li>
            </StyledUl>
          </StyledColumn>

          <StyledColumn>
            <StyledUl>
              <h2>RESOURCES</h2>
              <li>About Adept</li>
              <li>Contact</li>
              <li>View Repository</li>
              <li>Help Center</li>
            </StyledUl>
          </StyledColumn>
        </StyledFooterNav>
        <StyledFooterIconsColumn>
          <a href="https://github.com/RebekahKoon">
            <i className="fab fa-github-alt fa-lg"></i>
          </a>
          <a href="https://github.com/devnguy">
            <i className="fab fa-github fa-lg"></i>
          </a>
          <a href="https://github.com/RedWolf625">
            <i className="fab fa-github-square fa-lg"></i>
          </a>
        </StyledFooterIconsColumn>
      </StyledFooterContainer>
    </MainContentContainer>
  </FooterStyles>
)

export default Footer
