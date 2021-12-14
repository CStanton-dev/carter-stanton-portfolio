/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react'
import { animateScroll } from 'react-scroll'

import { Container } from '../Container'
import { MastheadNavLink } from './MastheadNavLink'

import styles from './Masthead.module.scss'

const scrollToTop = () => {
  animateScroll.scrollToTop()
}

export const Masthead: React.FC = () => (
  <header className={styles.masthead}>
    <Container>
      <div className={styles.mastheadInner}>
        <div className={styles.mastheadTitle}>
          <button type="button" onClick={scrollToTop}>
            <span className={styles.brand}>&lt;/&gt;</span> CSDEV
          </button>
        </div>
        <nav className={styles.mastheadNav}>
          <MastheadNavLink to="about">About</MastheadNavLink>
          <MastheadNavLink to="portfolio">Portfolio</MastheadNavLink>
          <MastheadNavLink to="contact">Contact</MastheadNavLink>
        </nav>
      </div>
    </Container>
  </header>
)
