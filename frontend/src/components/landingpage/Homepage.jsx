
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
          >The premier solution for effortless quality assurance</motion.h1>
          <motion.p
          variants={container(0.2)}
          initial="hidden"
          animate='visible'>
            Our user-friendly web app simplifies legume quality monitoring. 
            It continuously tracks temperature and humidity levels in storage areas, providing real-time data and generating detailed reports. This convenient tool helps maintain optimal storage conditions,
             supporting quality preservation and reducing the risk of spoilage
            </motion.p>
          
        </div>
      </div>
      </section>
  )
}

export default Homepage
