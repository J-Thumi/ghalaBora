
import { motion } from 'framer-motion'
import cloud from '../images/cloud.jpg'
import scale from '../images/scalee.jpg'
import wireless from '../images/wireless.jpg'

const Services = () => {
  return (
    <motion.section 
    whileInView={{opacity:1,x:0}}
              initial={{opacity:0,x:100}}
              transition={{duration:1.5}}
              className="features" id="features">
      <motion.h1
       whileInView={{opacity:1,x:0}}
       initial={{opacity:0,x:100}}
       transition={{duration:1.5}}
       >Bean Brilliance Unleashed</motion.h1>
      <motion.p
      whileInView={{opacity:1,x:0}}
      initial={{opacity:0,x:100}}
      transition={{duration:1.5}}
      >Unleash the brilliance of top-tier bean quality control.</motion.p>
      <div className="row">
          <div className="features-col">
             <motion.div
             whileInView={{opacity:1,x:0}}
             initial={{opacity:0,x:100}}
             transition={{duration:1.5}}>
                 <img src={wireless} alt="test"/></motion.div>
              <motion.h3
              whileInView={{opacity:1,x:0}}
              initial={{opacity:0,x:100}}
              transition={{duration:1.5}}
              >Wireless Connectivity</motion.h3>
              <motion.p
              whileInView={{opacity:1,x:0}}
              initial={{opacity:0,x:100}}
              transition={{duration:1.5}}
              >Say goodbye to tangled wires and complicated connections. Our sensors communicate wirelessly, allowing for flexible placement and hassle-free installation.</motion.p>
          </div>
          <div className="features-col">
            <motion.div
             whileInView={{opacity:1,x:0}}
             initial={{opacity:0,x:100}}
             transition={{duration:1.5}}
            ><img src={scale} alt="test"/></motion.div>
              
              <motion.h3
              whileInView={{opacity:1,x:0}}
              initial={{opacity:0,x:100}}
              transition={{duration:1.5}}
              >Scalable Solution</motion.h3>
              <motion.p
              whileInView={{opacity:1,x:0}}
       initial={{opacity:0,x:100}}
       transition={{duration:1.5}}
       >As your business grows, our wireless system grows with you. Add more sensors as needed without the hassle of running additional cables or reconfiguring your setup. Our wireless solution scales effortlessly to meet your evolving needs.</motion.p>
          </div>
          <div className="features-col">
            <motion.div
             whileInView={{opacity:1,x:0}}
             initial={{opacity:0,x:100}}
             transition={{duration:1.5}}>
                <img src={cloud} alt="test"/>
             </motion.div>
              
              <motion.h3
              whileInView={{opacity:1,x:0}}
              initial={{opacity:0,x:100}}
              transition={{duration:1.5}}
              >Cloud Storage</motion.h3>
              <motion.p
              whileInView={{opacity:1,x:0}}
              initial={{opacity:0,x:100}}
              transition={{duration:1.5}}
              >Access your data anytime, anywhere, with our cloud-powered solution. No matter where you are, you can easily monitor your beans and make informed decisions on the go.</motion.p>
          </div>
      </div>
  </motion.section>
  )
}

export default Services
