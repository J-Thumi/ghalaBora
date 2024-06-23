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

  
const Problem = () => {
  return (
    <section id="Problem">
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
</section>
  )
}

export default Problem
