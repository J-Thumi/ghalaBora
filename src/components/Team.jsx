import React from 'react'
import {motion} from 'framer-motion'
import john from '../images/john.png'
import joe from '../images/joe.png'
import lelgo from '../images/lelgo.png'
import bene from '../images/bene.png'
import lee from '../images/lee.png'
import theo from '../images/theo.png'



const Team = () => {
  return (
    <motion.section 
    whileInView={{opacity:1,x:0}}
    initial={{opacity:0,x:-100}}
    transition={{duration:1.5}}
    className="campus" id="team">
      <h1
      >Meet the Team</h1>
      <div className="row">
          <div className="campus-col">
            {/* '../images/bene.jpg ' */}
              <img src={bene} alt="test"/>
              <div className="layer">
                  <h3>Benedict Waweru</h3>
                  <p>Team Lead <br />Technical Researcher <br /> Backend Developer</p>
              </div>
          </div>
          <div className="campus-col">
              <img src={theo} alt="test"/>
              <div className="layer">
                  <h3>Theophilus Korir</h3>
                  <p>Market Researcher <br />Frontend Developer</p>
              </div>
          </div>
          <div className="campus-col">
              <img src={joe} alt="test"/> 
              <div className="layer">
                  <h3>Josphat Thumi</h3>
                  <p>Product Researcher<br />Frontend Developer</p>
              </div>
          </div>
          <div className="campus-col">
              <img src={lelgo} alt="test"/>
              <div className="layer">
                  <h3>Isaac Lelgo</h3>
                  <p>Product Researcher<br />Backend Developer</p>
              </div>
          </div>
          <div className="campus-col">
              <img src={lee} alt="test"/>
              <div className="layer">
                  <h3>Lee Thiong'o</h3>
                  <p>IoT Programmer</p>
              </div>
          </div>
          <div className="campus-col">
              <img src={john} alt="test"/>
              <div className="layer">
                  <h3>John Kibet</h3>
                  <p>IoT Programmer</p>
              </div>
          </div>
      </div>
  </motion.section>
  )
}

export default Team
