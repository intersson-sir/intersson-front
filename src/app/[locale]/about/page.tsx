import Clients from './components/Clients'
import HeroSection from './components/HeroSection'
import Media from './components/Media/inedx'
import Potencial from './components/Potential'
// import Team from './components/Team'

const AboutPage = () => {
  return (
    <main>
      <HeroSection />
      <Clients />
      <Potencial />
      {/* <Team /> */}
      <Media />
    </main>
  )
}

export default AboutPage
