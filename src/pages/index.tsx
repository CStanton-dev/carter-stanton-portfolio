import * as React from 'react'
import Helmet from 'react-helmet'

import { Intro } from '../components/Intro'
import { About } from '../components/About'
import { Portfolio } from '../components/Portfolio'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'
import IndexLayout from '../layouts'

const IndexPage: React.FC = () => {
  return (
    <IndexLayout>
      <Helmet meta={[{ property: 'og:url', content: 'https://carterstanton.dev/index.html' }]} />
      <Intro />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </IndexLayout>
  )
}

export default IndexPage
