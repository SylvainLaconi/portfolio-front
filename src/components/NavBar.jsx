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
            <HashLink smooth to="/#home">
              Home
            </HashLink>
          </StyledLi>
          <StyledLi>
            <HashLink smooth to="/#skills">
              Compétences
            </HashLink>
          </StyledLi>
          <StyledLi>
            <HashLink smooth to="/#works">
              Portfolio
            </HashLink>
          </StyledLi>
          <StyledLi>
            <HashLink smooth to="/#about">
              A propos de moi
            </HashLink>
          </StyledLi>
          <StyledLi>
            <HashLink smooth to="/#contact">
              Contact
            </HashLink>
          </StyledLi>
          {isAdmin && (
            <StyledLi>
              <Link to="/admin">Admin</Link>
            </StyledLi>
          )}
        </StyledUl>
      </StyledNav>
    </ContainerNavBar>
  );
};

export default NavBar;
