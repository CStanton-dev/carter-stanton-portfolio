import * as React from 'react'
import { Link as ScrollLink } from 'react-scroll'

import styles from './MastheadNavLink.module.scss'

interface MastheadLinkProps extends React.HTMLProps<HTMLLinkElement> {
  to: string
}

export const MastheadNavLink: React.FC<MastheadLinkProps> = ({ to, children }) => (
  <ScrollLink href={`#${to}`} className={styles.mastheadNavLink} activeClass={styles.active} to={to} spy offset={-60}>
    {children}
  </ScrollLink>
)
