import React from 'react'
import { Inter } from 'next/font/google'
import "./globals.css";
import Navbar from '../component/Navbar/Navbar.jsx'
import Footer from '../component/Footer/Footer.jsx'

const inter = Inter({
  subsets: ['latin'],
});

export const layout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <Navbar />
          {children}
          <Footer />
        </div>

      </body>
    </html>
  );
}

export default layout


