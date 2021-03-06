import * as React from 'react'

import styles from './Container.module.scss'

export const Container: React.FC<React.HTMLProps<HTMLDivElement>> = ({ style, children, ...rest }) => (
  <div className={styles.container} style={style} {...rest}>
    {children}
  </div>
)
