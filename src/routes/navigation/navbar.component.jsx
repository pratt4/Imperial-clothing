import { Fragment } from 'react';
import { Outlet,Link } from 'react-router-dom';
// import { ReactComponent as Crown } from '../../assets/crown.svg';

import './navbar.styles.scss'

import CrownSvg from '../../assets/crown.svg';

const Crown = () => {
  return <img src={CrownSvg} alt="Crown" />;
};


const Navbar=()=>{
  return(
     
    <Fragment>

   
      <div className="navigation">
        <Link className='logo-container' to='/'>
        <Crown className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className='nav-link' to='/shop' > SHOP</Link>
          <Link className='nav-link' to='/signIn' > SIGN IN</Link>
        </div>
      </div>
      <Outlet/>
      
    </Fragment>

    
  )
}

export default Navbar;