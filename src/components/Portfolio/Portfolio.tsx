import * as React from 'react'
import classnames from 'classnames'

import { Container } from '../Container'
import { Row } from '../Row'
import { Col } from '../Col'
import { FullScreenSection } from '../FullScreenSection'

import styles from './Portfolio.module.scss'

import ReactCode from './reactCode.png'
import CentervilleBarbers from './centervilleBarbers.png'
import ImperiumPopuli from './imperiumPopuli.png'

export const Portfolio = () => (
  <FullScreenSection name="portfolio">
    <Container>
      <Row style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <Col>
          <div className={classnames(styles.featureBox, styles.guessWhat)}>
            <h2 style={{ color: 'black' }}>POINT-OF-SALE SYTEM</h2>
            <p>Built a point-of-sale system which modeled and calculated real estate transactions. The technologies used included:</p>
            <ul>
              <li>React.js</li>
              <li>MySQL</li>
              <li>
                HTML/CSS<sup>[1]</sup>
              </li>
            </ul>
            <p>
              <small>
                <sup>[1]</sup>
                The HTML/CSS was used for the front end design, so the customer didn't have to just look at a CLI.
              </small>
            </p>
          </div>
        </Col>
        <Col>
          <div className={styles.featureImageBox}>
            <img alt="React Code" src={ReactCode} />
          </div>
        </Col>
      </Row>
      <Row reverse style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <Col>
          <div className={styles.featureBox}>
            <h2>BARBERSHOP WEBSITE</h2>
            <p>Created a business website for customers. The site included scheduling components and custom graphics design.</p>
            <p>The technologies used included:</p>
            <ul>
              <li>HTML/CSS</li>
              <li>PHP</li>
              <li>JavaScript</li>
              <li>Photoshop</li>
            </ul>
            <p>
              The website allows customers to <strong>book appointments</strong>, and shows the availabile appointments for each barber.
            </p>
            <p>It also offers a gallery of haircuts so perspective customers can view the quality of the haircuts</p>
            <p>
              <small>
                The website can be found at{' '}
                <a href="http://centervillebarbers.net/" target="_blank" rel="noopener noreferrer">
                  CentervilleBarbers.net
                </a>
              </small>
            </p>
          </div>
        </Col>
        <Col>
          <div className={styles.featureImageBox}>
            <img alt="Centerville Barbers" src={CentervilleBarbers} />
          </div>
        </Col>
      </Row>
      <Row style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <Col>
          <div className={styles.featureBox}>
            <h2>MINECRAFT WEBSITE</h2>
            <p>
              built to allow customers provision their own Minecraft server for game play. The site includes components for scheduling
              special events, creating custom skin packs, purchasing products, and more. The technologies used included:
            </p>
            <ul>
              <li>HTML/CSS</li>
              <li>PHP</li>
              <li>MySQL</li>
              <li>JavaScript</li>
            </ul>
            <p>
              <small>
                The website can be found at{' '}
                <a href="#!" rel="noopener noreferrer" style={{ textDecoration: 'line-through' }}>
                  ImperiumPopuli.net
                </a>
                <br />
                <br />
                There is a second side to the website. A <strong>forum</strong> was built for customers to communicate with each other and
                with staff. The technologies used for this side mirrors the technologies used for the previous side of the website. The
                forum can be found at{' '}
                <a href="#!" rel="noopener noreferrer" style={{ textDecoration: 'line-through' }}>
                  ImperiumPopuli.net/forum
                </a>
              </small>
            </p>
          </div>
        </Col>
        <Col>
          <div className={styles.featureImageBox}>
            <img alt="Imperium Populi" src={ImperiumPopuli} />
          </div>
          <div className={classnames(styles.featureBox, styles.alternate)}>
            <p>
              <strong>Note:</strong> as of October 2021, the website is no longer operational.
            </p>
            <p>I have been told the reason for the site going down was lack of funding.</p>
            <p>
              However, I will link to the{' '}
              <a href="#" target="_blank" rel="noopener noreferrer">
                GitHub Repository
              </a>{' '}
              that contains all the source code for the website.{' '}
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  </FullScreenSection>
)
