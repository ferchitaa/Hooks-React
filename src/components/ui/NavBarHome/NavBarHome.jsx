import { Link } from 'react-router-dom';
import './NavBarHome.css';

// const itemsNavBar = ["Home", "Services", "FAQ", "About us"];

export const NavBarHome = () => {
  return (
    <nav>
      <ul className='header'>
        <Link to="/"><li>Home</li></Link>
        {/* <Link to="/AboutUS"><li>AboutUS</li></Link>
        <Link to="/ContactUS"><li>ContactUS</li></Link> */}
        <Link to="/UseState"><li>UseState</li></Link>
        <Link to="/Changecolor"><li>Changecolor</li></Link>
        <Link to="/Hooks"><li>Hooks</li></Link>
      </ul>      
    </nav>
  )
}