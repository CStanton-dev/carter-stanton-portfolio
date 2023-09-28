import * as React from 'react'
import classnames from 'classnames'

import { Container } from '../Container'
import { Row } from '../Row'
import { Col } from '../Col'
import { FullScreenSection } from '../FullScreenSection'

import styles from './Portfolio.module.scss'

import ReactCode from './reactCode.png'
import RealtorLogo from './realtorLogo.png'
import CentervilleBarbers from './centervilleBarbers.png'
import ImperiumPopuli from './imperiumPopuli.png'

export const Portfolio = () => (
  <FullScreenSection name="portfolio">
    <Container>
      <Row style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <Col>
          <div className={classnames(styles.featureBox, styles.guessWhat)}>
            <h2 style={{ color: 'black' }}>POINT-OF-SALE SYSTEM</h2>
            <p>
              Designed and implemented a cutting-edge POS system<sup>[1]</sup> tailored for Iron Gate Realtors, a leading real estate
              agency. The system <strong>optimized transaction processing</strong>, seamlessly integrated with property listings, and
              offered comprehensive reporting tools for both agents and administrators.
            </p>
            <p>The technologies used included:</p>
            <ul>
              <li>
                <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                  ReactJS
                </a>
                , Redux, Tailwind CSS
              </li>
              <li>Node.js, Express.js</li>
              <li>
                PostgreSQL with{' '}
                <a href="https://postgis.net/" target="_blank" rel="noopener noreferrer">
                  PostGIS
                </a>
              </li>
              <li>Stripe API</li>
              <li>
                Google Analytics, Custom-built<sup>[2]</sup> analytics dashboard
              </li>
            </ul>
            <p>
              <small>
                <sup>[1]</sup>
                This system is propietary, which prohibits me from sharing the code repository.
              </small>
            </p>
            <p>
              <small>
                <sup>[2]</sup>
                The custom dashboard provided real estate metrics for monitoring housing prices across the local market.
              </small>
            </p>
          </div>
        </Col>
        <Col>
          <div className={styles.featureImageBox}>
            <img alt="React Code" src={ReactCode} />
          </div>
          <div className={classnames(styles.featureBox, styles.ironGate)}>
            <div className={styles.featureImageBox}>
              <img alt="Iron Gate Realtors" src={RealtorLogo} />
            </div>
          </div>
        </Col>
      </Row>
      <Row reverse style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <Col>
          <div className={styles.featureBox}>
            <h2>BARBERSHOP WEBSITE</h2>
            <p>
              Developed a modern and responsive reservation website for Centerville Barbers, a sought-after local barbershop. The site
              allowed clients to effortlessly <strong>book appointments</strong>, view real-time availability, and explore a stylish gallery
              of popular haircuts.
            </p>
            <p>The technologies used included:</p>
            <ul>
              <li>Next.js with TypeScript, Tailwind CSS</li>
              <li>Java (Spring Boot)</li>
              <li>Docker</li>
              <li>MySQL</li>
              <li>FullCalendar.js</li>
              <li>
                Google Analytics, Custom<sup>[1]</sup> analytics platform
              </li>
            </ul>
            <p>
              <small>
                The website can be found at{' '}
                <a href="http://centervillebarbers.net/" target="_blank" rel="noopener noreferrer">
                  CentervilleBarbers.net
                </a>
              </small>
            </p>
            <p>
              <small>
                <sup>[1]</sup>
                The custom platform provided for tracking booking patterns
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
              Constructed an immersive website for Imperium Populi, a dedicated Minecraft gaming community. The site offers players
              resources, real-time server statistics, forums for discussions, and an integrated marketplace for in-game items.
            </p>
            <p>The technologies used included:</p>
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
