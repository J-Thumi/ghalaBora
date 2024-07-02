import React from 'react'
import Footer from './Footer'
import Collaborators from './Collaborators'
import Team from './Team'
import Homepage from './Homepage'
import Nav from './Nav'
import Features from './Features'


const LandingPageIndex = () => {
  return (
    <main>
        <Nav/>
      < Homepage/>
      <Features/>
      <Team/>
      <Collaborators/>
      <Footer/>
    </main>
  )
}

export default LandingPageIndex
