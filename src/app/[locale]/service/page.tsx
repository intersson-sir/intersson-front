import { NextPage } from 'next'

import Contract from './components/Contract'
import HeroSection from './components/HeroSection'
import List from './components/List'
import Projects from './components/Projects'
import StepBlock from './components/StepBlock'
import WorkBlock from './components/WorkBlock'

const ServicePage: NextPage = () => {
  return (
    <section>
      <HeroSection />
      <List />
      <WorkBlock />
      <Contract />
      <StepBlock />
      <Projects />
    </section>
  )
}

export default ServicePage
