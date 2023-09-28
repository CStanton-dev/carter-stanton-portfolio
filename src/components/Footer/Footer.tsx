import * as React from 'react'

import { Container } from '../Container'

import styles from './Footer.module.scss'

const getCurrentYear = () => {
  const currentYear = new Date().getFullYear()

  return <span>{currentYear}</span>
}

export const Footer = () => (
  <footer className={styles.footer}>
    <Container>
      <hr className={styles.footerRule} />
      <p>
        <small>
          Licensed under the{' '}
          <a href="https://en.wikipedia.org/wiki/MIT_License" target="_blank" rel="noopener noreferrer">
            MIT License
          </a>{' '}
          &copy; {getCurrentYear()} Carter Stanton.
        </small>
      </p>
    </Container>
  </footer>
)
