import { NextPage } from 'next'

import AboutBlock from './components/AboutBlock'
import HeroSection from './components/HeroSection'
import MarqueeProjects from './components/MarqueeProjects'
import MediaBlock from './components/MediaBlock'
import Projects from './components/Projects'
import ReturnBlock from './components/ReturnBlock'
import Service from './components/Service'

const MainPage: NextPage = () => {
  return (
    <section>
      <HeroSection />
      <MarqueeProjects />
      <AboutBlock />
      <Projects />
      <ReturnBlock />
      <Service />
      <MediaBlock />
    </section>
  )
}

export default MainPage
