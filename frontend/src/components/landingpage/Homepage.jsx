
import {motion} from 'framer-motion'
import Nav from './Nav'

const container=(delay)=>({
    hidden:{x:-100,opacity:0},
    visible:{
      x:0,
      opacity:1,
      transition:{duration:0.5, delay:delay}
    }
  })


const Homepage = () => {

  return (
      <section id="Home" className="home lazy">
      <Nav/>
      <div>
      <div className="text-box">
          
          <motion.h1
          variants={container(0.1)}
          initial="hidden"
          animate='visible'
          >Making monitoring hassle-free</motion.h1>
          <motion.p
          variants={container(0.2)}
          initial="hidden"
          animate='visible'>
              Our advanced real-time quality control ensures the highest quality for legumes. Utilizing cutting-edge technology, it accurately detects defects, size variations, moisture content, and foreign materials, guaranteeing consistency, safety, and superior quality in every batch.
          </motion.p>
          
        </div>
      </div>
      </section>
  )
}

export default Homepage
