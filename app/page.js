"use client"

import React from 'react'
import Landing from './components/Landing/Landing'
import Projects from './components/Projects/Projects'
import Navbar from './components/Navbar/Navbar'

const page = () => {
  return (
    <div>
      <Landing />
      <Navbar />
      <Projects />
    </div>
  )
}

export default page