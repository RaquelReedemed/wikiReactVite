import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';
import MediaQuery from 'react-responsive';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import imgLogo from '../styles/assets/Vector.svg';
import '../styles/Navbar.css';
import BarraDeBusqueda from '../components/BarraDeBusqueda';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
    <IconContext.Provider value={{ color: '#121212'}}>
      <div className='navbar'>
        {/* Mobile */}
        <MediaQuery maxDeviceWidth={768}>
          <Link to='#' className='link nav__menu--burger'>
            <FaIcons.FaBars className='icon nav__menu--burger' onClick={showSidebar} />
          </Link>

          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
              <li className='navbar-toggle'>
                <Link to='#' className='menu-bars'>
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName} >
                    <Link to={item.path} >
                      <span>{item.title}</span>
                      {item.icons}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </MediaQuery>
        
        {/* Logo */}
        <a href='/'> 
          <img src={imgLogo}
            className='nav__logo' 
            alt='logo_wikiIdeas'/> 
        </a>

        {/* Search Mobile */}
        <MediaQuery maxDeviceWidth={768}>
          <Link to='/' className='link nav__search'>
            <AiIcons.AiOutlineSearch className='icon nav__search'/>
          </Link>
        </MediaQuery>

        {/* Desktop */}
        <MediaQuery minDeviceWidth={768}>
          <div className='nav_container--rigth'>
            <BarraDeBusqueda />
            <Link to="/crearArticulo" className="btnCrearArticulo">Crear artículo</Link>
            <Link to="/sobreNosotros" className="btnSobreNosotros">Sobre Nosotros</Link>
          </div>
        </MediaQuery>

      </div>
    </IconContext.Provider>
    </>
  );
}

export default Navbar;