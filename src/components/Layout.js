// IMPORTS ------------------------------

import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

import "../global.module.css"

// STYLES --------------------

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div> {children} </div>
      <Footer />
    </>
  )
}

export default Layout
