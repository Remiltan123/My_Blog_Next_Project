import React from 'react'
import Link from 'next/link'
import  styles from './navbar.module.css'

export const Navbar = () => {

  const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Portfolio",
      url: "/portfolio",
    },
    {
      id: 3,
      title: "Blog",
      url: "/blog",
    },
    {
      id: 4,
      title: "About",
      url: "/about",
    },
    {
      id: 5,
      title: "Contact",
      url: "/contact",
    },
    {
      id: 6,
      title: "Dashboard",
      url: "/dashboard",
    },
  ];

  return (
    <div className={styles.container}>

        <Link href="/" className={styles.logo}>Remi Start</Link>

        <div className={styles.links}>
          {links.map((link,index)=>
             <Link key={index} href={link.url}>{link.title}</Link>
          )}
        </div>

        <button className={styles.logout}>
            Logout
        </button>

    </div>
  )
}

export default  Navbar
