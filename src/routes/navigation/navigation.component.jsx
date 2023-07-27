import 'regenerator-runtime/runtime'

import { Fragment, useContext } from 'react';
import { Outlet ,useNavigate} from 'react-router-dom';


import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import CrownSvg  from '../../assets/crown.svg';
const CrwnLogo = () => {
  return <img src={CrownSvg} alt="Crown" />;
};

import SpeechRecognitionButton from './SpeechRecognitionButton';

import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
  SearchContainer,
  LogoAndNameContainer,
  LogoTitle
} from './navigation.styles';

const Navigation = () => {
  const navigate=useNavigate();
  const handleSignOut = async () => {
    await signOutUser();
    alert('Sign out successful!');
    navigate('/auth');
  };

  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
      <LogoAndNameContainer to='/'>
        <LogoContainer to='/' >
          <CrwnLogo />
        </LogoContainer>
          <LogoTitle>Imperial Clothing</LogoTitle>

      </LogoAndNameContainer>
        <NavLinks>
        <SearchContainer>
        <span>Click here for voice-based navigation 👉</span>
          <SpeechRecognitionButton /> 
        </SearchContainer>
          <NavLink to='/shop'>SHOP</NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={handleSignOut}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to='/auth'>SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
