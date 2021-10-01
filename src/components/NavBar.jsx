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
            <HashLink
              smooth
              to="/#home"
              className="navLink"
              style={{ fontSize: '18px' }}
            >
              Home
            </HashLink>
          </StyledLi>{' '}
          <StyledLi>
            <HashLink
              smooth
              to="/#about"
              className="navLink"
              style={{ fontSize: '18px' }}
            >
              A propos de moi
            </HashLink>
          </StyledLi>
          <StyledLi>
            <HashLink
              smooth
              to="/#works"
              className="navLink"
              style={{ fontSize: '18px' }}
            >
              Réalisations
            </HashLink>
          </StyledLi>
          <StyledLi>
            <HashLink
              smooth
              to="/#skills"
              className="navLink"
              style={{ fontSize: '18px' }}
            >
              Compétences
            </HashLink>
          </StyledLi>
          <StyledLi>
            <HashLink
              smooth
              to="/#contact"
              className="navLink"
              style={{ fontSize: '18px' }}
            >
              Contact
            </HashLink>
          </StyledLi>
          {isAdmin && (
            <StyledLi>
              <Link
                to="/admin"
                className="navLink"
                style={{ fontSize: '18px' }}
              >
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
