import * as React from 'react'

import { Container } from '../Container'
import { Row } from '../Row'
import { Col } from '../Col'
import { FullScreenSection } from '../FullScreenSection'

import styles from './Contact.module.scss'

export const Contact: React.FC = () => (
  <FullScreenSection name="contact">
    <div className={styles.featureFullscreenBackground}>
      <Container>
        <Row>
          <Col>
            <div className={styles.innerBox}>
              <h2>CONTACT ME</h2>
              <p>
                I am always trying to better myself and reach for new heights. So I am always willing to work on something new, big or
                small.
              </p>
              <p>If you would like to reachout to me, feel free to use my handles below and I will get back to you as soon as possible.</p>
              <ul>
                <li>
                  <a href="https://www.linkedin.com/in/carter-stanton-dev/" target="_blank">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="mailto:contact@carterstanton.dev">contact@carterstanton.dev</a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </FullScreenSection>
)
