import * as React from 'react'
import { Element } from 'react-scroll'

import styles from './FullScreenSection.module.scss'

interface FullScreenSectionProps {
  name: string
}

export const FullScreenSection: React.FC<FullScreenSectionProps> = ({ name, children }) => (
  <Element id={name} name={name} className={styles.fullScreenSection}>
    <div className={styles.fullScreenSectionInner}>{children}</div>
  </Element>
)
