import React from 'react'
import styles from './page.module.css'

export const layout = ({children}) => {
  return (
    <div>
        <h1 className={styles.mainTitle}>OUR WORKS</h1>
        {children}
    </div>
  )
}

export default layout