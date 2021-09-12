import React, { useContext } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { ContainerNavBar } from '../styles/_containers';
import { StyledLi, StyledNav, StyledUl } from '../styles/_navbar';
import AdminContext from '../context/AdminContext';

const NavBar = () => {
  const { isAdmin } = useContext(AdminContext);
  return (
    <ContainerNavBar>
      <StyledNav>
        <StyledUl>
          <StyledLi>
            <HashLink smooth to="/#home" className="navLink">
              Home
            </HashLink>
          </StyledLi>
          <StyledLi>
            <HashLink smooth to="/#skills" className="navLink">
              Compétences
            </HashLink>
          </StyledLi>
          <StyledLi>
            <HashLink smooth to="/#works" className="navLink">
              Réalisations
            </HashLink>
          </StyledLi>
          <StyledLi>
            <HashLink smooth to="/#about" className="navLink">
              A propos de moi
            </HashLink>
          </StyledLi>
          <StyledLi>
            <HashLink smooth to="/#contact" className="navLink">
              Contact
            </HashLink>
          </StyledLi>
          {isAdmin && (
            <StyledLi>
              <Link to="/admin" className="navLink">
                Admin
              </Link>
            </StyledLi>
          )}
        </StyledUl>
      </StyledNav>
    </ContainerNavBar>
  );
};

export default NavBar;
