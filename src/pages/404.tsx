import * as React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'

import { Container } from '../components/Container'
import { FullScreenSection } from '../components/FullScreenSection'
import IndexLayout from '../layouts'

const NotFoundPage = () => (
  <IndexLayout>
    <div style={{ height: '100%' }}>
      <Helmet meta={[{ property: 'og:url', content: 'https://carterstanton.dev/404.html' }]} />
      <FullScreenSection name="404">
        <Container>
          <h1>404 - Page not found.</h1>
          <p>
            Oops! look&apos;s like you&apos;re on the wrong page. <Link to="/">Click here</Link> to go back!
          </p>
        </Container>
      </FullScreenSection>
    </div>
  </IndexLayout>
)

export default NotFoundPage
