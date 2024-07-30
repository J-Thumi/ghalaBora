
import Footer from './Footer'
import Collaborators from './Collaborators'
import Team from './Team'
import Homepage from './Homepage'
import Features from './Features'
import Problem from './Problem'


const LandingPageIndex = () => {
  return (
    <main className='landing-page'>
      < Homepage/>
      <Problem/>
      <Features/>
      <Team/>
      <Collaborators/>
      <Footer/>
    </main>
  )
}

export default LandingPageIndex
