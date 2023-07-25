import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  /* background-color: #e0f6fb; */
`;
export const LogoAndNameContainer  = styled(Link)`
  display: flex;
  align-items: center;
`;
export const LogoContainer = styled(Link)`
  /* display: flex; */
  height: 100%;
  width: 70px;
  padding: 25px;
  
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

// Search bar container
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  /* margin-right: auto; */
  /* margin-left: 40px;  */
`;

// Search input field
export const SearchInput = styled.input`
  margin-right: 10px;
  margin-left: 150px;
  padding: 5px;
`;

// Icon button for microphone icon
export const IconButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left: 40px;  // Add space to the left of the microphone icon
  padding: 5px;
  border-radius: 50%;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }
`;
export const LogoTitle = styled.h1`
  /* Add your styles for the website name here. For example: */
  font-size: 1.1em;
  margin-left: 10px;
  padding-top:28px ;
  padding-left:20px ;
`;

