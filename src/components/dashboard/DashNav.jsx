import logo from '../../images/Logo_maker_project-removebg-preview 1.svg'
import { FaUser } from "react-icons/fa";

const DashNav = () => {
  return (
    <nav className="dashnav">
        <img src={logo} alt="logo"/>
        <FaUser  className='user'/>
    </nav>
  )
}

export default DashNav