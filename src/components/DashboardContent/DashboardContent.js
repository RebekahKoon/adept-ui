import MainContentContainer from '../styles/MainContentContainer'
import SearchBar from '../SearchBar'

const DashboardContent = () => {
  const headerText = 'Discover Jobs and Make Connections'
  return (
    <MainContentContainer>
      <SearchBar headerText={headerText} />
    </MainContentContainer>
  )
}

export default DashboardContent
