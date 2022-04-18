import  './sidebar.css'
import {FaHome,FaStar,FaSignOutAlt,FaPlus} from 'react-icons/fa'
import {Link} from 'react-router-dom'
function Sidebar() {
  return (
    <div className='sidebar'>

      <Link to='/browse'><FaHome className='icon'/></Link>
       <Link to='/browse/favourites'> <FaStar className='icon'/></Link>
       <Link to='/browse/ajouterfilm'> <FaPlus className='icon'/></Link>
      <FaSignOutAlt className='icon'/>
      


    </div>
  )
}

export default Sidebar