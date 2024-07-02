
import {motion} from 'framer-motion'
import farmer from '../../images/person1.jpg'
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
        <div>
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
          
      </div>

      <div className="prob">
        <motion.h1
        variants={container(0.3)}
        initial="hidden"
        animate='visible'>Problem</motion.h1>
        <motion.p
        variants={container(0.4)}
        initial="hidden"
        animate='visible'>Traditional quality 
            control systems are 
            plagued by inefficiencies
            due to manual inspections, 
            which are labor-intensive and 
            error-prone, leading to
            inconsistent data and 
            delayed issue detection</motion.p>
    </div>

        </div>
       
      

      <img src={farmer}/>
  </section>



  
  
  
  
    </div>
  )
}

export default Homepage
