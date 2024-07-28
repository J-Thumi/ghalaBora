
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Nav = () => {

  const [activeLink, setActiveLink] = useState('#Home');

  useEffect(() => {
    // Get the active link from local storage on component mount
    const storedActiveLink = localStorage.getItem('activeLink');
    if (storedActiveLink) {
      setActiveLink(storedActiveLink);
    }
  }, []);

  const handleClick = (hash) => {
    //event.preventDefault()// Prevent the default anchor behavior
    // Update the state and local storage with the new active link
    setActiveLink(hash);
    localStorage.setItem('activeLink', hash);
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 5;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  return (
    <div> 
    <header>
        <nav className={`navbar-landing ${scrolled ? 'scrolled' : ''}`}>
            <a href="#" className="logo">
                <img src={logo} alt="logo"/>
            </a>
           
            <ul className="links">
              <li className={activeLink === '#Home' ? 'active' : ''}>
                <a href="#Home" onClick={(event) => handleClick (event, '#Home')}>Home</a>
              </li>
              <li className={activeLink === '#Problem' ? 'active' : ''}>
                <a href="#Problem" onClick={(event) => handleClick(event,'#Problem')}>Problem</a>
              </li>
              <li className={activeLink === '#features' ? 'active' : ''}>
                <a href="#features" onClick={(event) => handleClick(event, '#features')}>Features</a>
              </li>
              <li className={activeLink === '#team' ? 'active' : ''}>
                <a href="#team" onClick={(event) => handleClick(event, '#team')}>Team</a>
              </li>
              <li className={activeLink === '#collaborators' ? 'active' : ''}>
                <a href="#collaborators" onClick={(event) => handleClick(event, '#collaborators')}>Collaborators</a>
              </li>
            </ul>
            <Link to='/login'><button className="login-btn" >Login</button></Link>

            
        </nav>
    </header>
    </div>
  )
}

export default Nav