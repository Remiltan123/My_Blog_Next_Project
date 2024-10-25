"use client"

import React from 'react'
import styles from './darkModeToggle.module.css'
import { useContext } from 'react'
import {ThemeContext} from '../../context/ThemeContext.js'


export const ToggleDarkContext = () => {

    const {toggle,mode} = useContext(ThemeContext)
    
    return (

        <div className={styles.container} >
            <div className={styles.icon} onClick={toggle}>🌙</div>
            <div className={styles.icon}  onClick={toggle}>🔆</div>
            <div className={styles.ball} style={mode === "light" ? { left: "2px" } : { right: "2px" }}/>
        </div>

    )
}

export default ToggleDarkContext
