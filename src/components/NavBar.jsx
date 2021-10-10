import React, { useContext } from 'react';
import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { ContainerFlexRow } from '../styles/_containers';
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

const ContainerNavBar = styled(ContainerFlexRow)`
  position: fixed;
  top: 0;
  z-index: 10;
  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: black;
  padding: 0.5rem;
`;

const StyledUl = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 80%;
  margin: 0;
  list-style-type: none;
`;

const StyledLi = styled.li`
  color: azure;
  width: 15%;
  text-align: center;
`;
