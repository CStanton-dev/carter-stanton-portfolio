import * as React from 'react'
import { Link as ScrollLink } from 'react-scroll'

import { Container } from '../Container'

import styles from './Intro.module.scss'

export const Intro = () => (
  <div className={styles.intro}>
    <div className={styles.introInner}>
      <Container>
        <h1>Carter Stanton</h1>
        <p>Coding the way to the future.</p>
      </Container>
    </div>
    <ScrollLink className={styles.introScrollThingy} to="about" smooth offset={-60}>
      &#9660; scroll down &#9660;
    </ScrollLink>
  </div>
)
