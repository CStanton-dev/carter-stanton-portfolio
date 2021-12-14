import * as React from 'react'

import styles from './Col.module.scss'

export const Col: React.FC<React.HTMLProps<HTMLDivElement>> = ({ style, children, ...rest }) => (
  <div className={styles.Col} style={style} {...rest}>
    {children}
  </div>
)
