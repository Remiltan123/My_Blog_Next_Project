import React from 'react'
import styles from './button.module.css'
import Link from 'next/link'

export const Button = ({url, text}) => {
  return (
    <Link href={url} >
        <button className={styles.container}>{text}</button>
    </Link>
  )
}

export default Button
