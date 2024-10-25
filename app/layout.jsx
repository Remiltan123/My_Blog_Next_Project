import React from 'react'
import { Inter } from 'next/font/google'
import "./globals.css";
import Navbar from '../component/Navbar/Navbar.jsx'
import Footer from '../component/Footer/Footer.jsx'
import { ThemeProvider } from '../context/ThemeContext.js'



const inter = Inter({
  subsets: ['latin'],
});

export const layout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
            < ThemeProvider >
            <div className="container">
              <Navbar />
              {children}
              <Footer />
            </div>
            </ ThemeProvider >
          

      </body>
    </html>
  );
}

export default layout


