
import {motion} from 'framer-motion'
import jkuat from '../images/jkuat.jpg'
import jhub from '../images/jhub.jpg'



const Collaborators = () => {
  return (
    <section className="collaborators" id="collaborators">
      <motion.h1
      whileInView={{opacity:1,x:0}}
      initial={{opacity:0,x:100}}
      transition={{duration:1.5}}>
        Our Collaborators</motion.h1>
      <motion.p
      whileInView={{opacity:1,x:0}}
      initial={{opacity:0,x:100}}
      transition={{duration:1.5}}
      >Special thanks to our collaborators</motion.p>
      <motion.div 
      whileInView={{opacity:1,x:0}}
      initial={{opacity:0,x:100}}
      transition={{duration:1.5}}
      className="row">
          <div className="collaborators-col">
              <img src={jhub} alt="JHUB Africa Logo"/>
              <div>
                  <p>
                      JHUB acts as the central platform for this groundbreaking project. It provides dedicated support, acting as a bridge between aspiring innovators and the resources needed to bring their ideas to life. JHUB offers comprehensive skills development programs and training initiatives designed to enhance digital literacy and proficiency, empowering individuals like myself to navigate the ever-evolving technological landscape. Additionally, JHUB takes responsibility for hosting the project website, ensuring accessibility and fostering a platform for knowledge sharing. </p>
                  <h3>
                      <a href="https://jhubafrica.com/">JHUB Africa</a>
                  </h3>
              </div>
          </div>
          <div className="collaborators-col">
              <img src={jkuat} alt="JKUAT Logo"/>
              <div>
                  <p>
                      The Department of Computing within JKUAT plays a pivotal role, offering state-of-the-art computer laboratories that are meticulously equipped to cater to the needs of both students and project participants. The department’s unwavering support extends beyond physical resources, providing access to a wealth of online resources, including valuable learning materials and tutorials on platforms like Microsoft Azure. These resources have been instrumental in equipping me with the necessary knowledge and skills to tackle this project. </p>
                  <h3>
                      <a href="https://www.jkuat.ac.ke/">JKUAT</a>
                  </h3>
              </div>
          </div>
      </motion.div>
  </section>
  )
}

export default Collaborators
