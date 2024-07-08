import logo from '../../images/Logo.svg'
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