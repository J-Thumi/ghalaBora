import React from 'react'
// import joe from '../images/joe.png'
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
 

const bene='../images/bene'

    // const bene=require('./bene.jpg')
  return (
    <div>
       <section id="Home" className="home lazy">
       
       <div className="text-box">
          
          <motion.h1
          variants={container(0.1)}
          initial="hidden"
          animate='visible'
          >Smarten Up Your Agriculture</motion.h1>
          <motion.p
          variants={container(0.2)}
          initial="hidden"
          animate='visible'>
              Our advanced real-time quality control system goes beyond simple weight measurement to ensure the highest standards for legumes. Utilizing cutting-edge technology, it accurately detects defects, size variations, moisture content, and foreign materials, guaranteeing consistency, safety, and superior quality in every batch.
          </motion.p>
          {/* <a href="#" className="hero-btn">Learn more</a> */}
      </div>
  </section>

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
  <section className="campus" id="team">
      <motion.h1
       whileInView={{opacity:1,y:0}}
       initial={{opacity:0,y:-100}}
       transition={{duration:1.5}}>Meet the Team</motion.h1>
      <div className="row">
          <div className="campus-col">
            {/* '../images/bene.jpg ' */}
              <img src={bene}alt="test"/>
              <div className="layer">
                  <h3>Benedict Waweru</h3>
                  <p>Team Lead </p> <p>Technical Researcher</p>  <p>Backend Developer</p>
              </div>
          </div>
          <div className="campus-col">
              <img src="../images/th" alt="test"/>
              <div className="layer">
                  <h3>Theophilus Korir</h3>
                  <p>Market Researcher </p> <p>Frontend Developer</p>
              </div>
          </div>
          <div className="campus-col">
              <img src='../images/joe' alt="test"/> 
              <div className="layer">
                  <h3>Josphat Thumi</h3>
                  <p>Product Researcher</p> <p>Frontend Developer</p>
              </div>
          </div>
          <div className="campus-col">
              <img src="../images/lelgo.JPG" alt="test"/>
              <div className="layer">
                  <h3>Isaac Lelgo</h3>
                  <p>Product Researcher</p> <p> Backend Developer</p>
              </div>
          </div>
          <div className="campus-col">
              <img src="../images/lee.JPG" alt="test"/>
              <div className="layer">
                  <h3>Lee Thiong'o</h3>
                  <p>IoT Programmer</p>
              </div>
          </div>
          <div className="campus-col">
              <img src="../images/john.JPG" alt="test"/>
              <div className="layer">
                  <h3>John Kibet</h3>
                  <p>IoT Programmer</p>
              </div>
          </div>
      </div>
  </section>
  <section className="contributors" id="features">
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
          <div className="contributors-col">
              <img src="wireless.jpg" alt="test"/>
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
          <div className="contributors-col">
              <img src="scalee.jpg" alt="test"/>
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
          <div className="contributors-col">
              <img src="cloud.jpg" alt="test"/>
              <motion.h3>Cloud Storage</motion.h3>
              <p>Access your data anytime, anywhere, with our cloud-powered solution. No matter where you are, you can easily monitor your beans and make informed decisions on the go.</p>
          </div>
      </div>
  </section>
  <section className="collaborators" id="collab">
      <h1>Our Collaborators</h1>
      <p>Special thanks to our collaborators</p>
      <div className="row">
          <div className="collaborators-col">
              <img src="jhub.jpg" alt="JHUB Africa Logo"/>
              <div>
                  <p>
                      JHUB acts as the central platform for this groundbreaking project. It provides dedicated support, acting as a bridge between aspiring innovators and the resources needed to bring their ideas to life. JHUB offers comprehensive skills development programs and training initiatives designed to enhance digital literacy and proficiency, empowering individuals like myself to navigate the ever-evolving technological landscape. Additionally, JHUB takes responsibility for hosting the project website, ensuring accessibility and fostering a platform for knowledge sharing. </p>
                  <h3>
                      <a href="https://jhubafrica.com/">JHUB Africa</a>
                  </h3>
              </div>
          </div>
          <div className="collaborators-col">
              <img src="jkuat.jpg" alt="JKUAT Logo"/>
              <div>
                  <p>
                      The Department of Computing within JKUAT plays a pivotal role, offering state-of-the-art computer laboratories that are meticulously equipped to cater to the needs of both students and project participants. The department’s unwavering support extends beyond physical resources, providing access to a wealth of online resources, including valuable learning materials and tutorials on platforms like Microsoft Azure. These resources have been instrumental in equipping me with the necessary knowledge and skills to tackle this project. </p>
                  <h3>
                      <a href="https://www.jkuat.ac.ke/">JKUAT</a>
                  </h3>
              </div>
          </div>
      </div>
  </section>
    </div>
  )
}

export default Homepage
