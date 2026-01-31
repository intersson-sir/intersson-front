import { NextPage } from 'next'

import Email from './components/Email'
import Map from './components/Map'

const ContactPage: NextPage = () => {
  return (
    <div>
      <Map />
      <Email />
    </div>
  )
}

export default ContactPage
