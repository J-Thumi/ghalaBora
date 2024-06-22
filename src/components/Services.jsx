import React from 'react'
import { motion } from 'framer-motion'


const container=(delay)=>({
    hidden:{x:-100,opacity:0},
    visible:{
      x:0,
      opacity:1,
      transition:{duration:0.5, delay:delay}
    }
  })

const Features = () => {
  return (
    <section className="course" id="service">
      <motion.h1 variants={container(0.5)}
          initial="hidden"
          animate='visible'>Our System Offers:</motion.h1>
      <motion.p
      variants={container(0.6)}
      initial="hidden"
      animate='visible'>
          Optimization of your operations, enhancing transparency, and building trust, all with our state-of-the-art bean quality control system.
      </motion.p>
      <div className="row">
          <div className="course-col">
              <motion.h3
               whileInView={{opacity:1,x:0}}
               initial={{opacity:0,x:100}}
               transition={{duration:1.5}}
               >Continuous Weight Tracking</motion.h3>
              <motion.p
               whileInView={{opacity:1,x:0}}
               initial={{opacity:0,x:-100}}
               transition={{duration:1.5}}>
                  Ditch the manual checks! This system tracks the weight of your produce, allowing early spoilage detection.  With early intervention, you can minimize losses and maintain consistent bean quality effortlessly. Embrace the future of bean management and guarantee the best for your customers with our advanced IoT solution.
              </motion.p>
          </div>
          <div className="course-col">
              <motion.h3
               whileInView={{opacity:1,x:0}}
               initial={{opacity:0,x:100}}
               transition={{duration:1.5}}
              >Advanced Sensor Integration</motion.h3>
              <motion.p
               whileInView={{opacity:1,x:0}}
               initial={{opacity:0,x:-100}}
               transition={{duration:1.5}}
               >
                  Our system utilizes high-precision sensors, designed for effortless installation, to monitor weight, temperature, humidity, and CO<sub>2</sub> levels, offering a comprehensive view of bean quality. Say goodbye to tangled wires and complicated connections. Our sensors communicate wirelessly, allowing for flexible placement and hassle-free installation.
              </motion.p>
          </div>
          <div className="course-col">
              <motion.h3
               whileInView={{opacity:1,x:0}}
               initial={{opacity:0,x:100}}
               transition={{duration:1.5}}
              >Automation</motion.h3>
              <motion.p
               whileInView={{opacity:1,x:0}}
               initial={{opacity:0,x:-100}}
               transition={{duration:1.5}}>
                  Receive instant notifications for any anomalies or potential spoilage, enabling prompt action to protect your inventory. Leverage automated, advanced and powerful data analytics tools to identify patterns and optimize storage conditions, enhancing overall quality and reducing waste.
              </motion.p>
          </div>
      </div>
  </section>
  )
}

export default Features

