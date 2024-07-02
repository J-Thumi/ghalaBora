
import {motion} from 'framer-motion'

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
    <div>
       <section id="Home" className="home lazy">
       
       <div className="text-box">
          
          <motion.h1
          variants={container(0.1)}
          initial="hidden"
          animate='visible'
          >Make monitoring hassle-free</motion.h1>
          <motion.p
          variants={container(0.2)}
          initial="hidden"
          animate='visible'>
              Our advanced real-time quality control ensures the highest quality for legumes. Utilizing cutting-edge technology, it accurately detects defects, size variations, moisture content, and foreign materials, guaranteeing consistency, safety, and superior quality in every batch.
          </motion.p>
          {/* <a href="#" className="hero-btn">Learn more</a> */}
      </div>

      <img src='../images/Img1'/>
  </section>



  
  
  
  
    </div>
  )
}

export default Homepage
