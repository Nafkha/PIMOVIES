import  './sidebar.css'
import {FaHome,FaSignInAlt,FaSignOutAlt,FaUser} from 'react-icons/fa'
function Sidebar() {
  return (
    <div className='sidebar'>
        <a href='https://google.com'><FaHome className='icon'/></a>
        <a href='https://google.com'><FaSignInAlt className='icon'/></a>
        <a href='https://google.com'><FaUser className='icon'/></a>
      


    </div>
  )
}

export default Sidebar