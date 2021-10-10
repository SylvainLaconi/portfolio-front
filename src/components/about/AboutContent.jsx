import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';
import { ContainerFlexRow, ContentContainer } from '../../styles/_containers';
import firebase from '../../utils/FirebaseConfig';
import { FONT_BLUE } from '../../styles/_color';

const AboutContent = () => {
  const [cvUrl, setCvUrl] = useState('');

  const storage = firebase.storage();

  useEffect(() => {
    storage
      .ref('CV_Sylvain_Laconi.pdf')
      .getDownloadURL()
      .then((url) => setCvUrl(url))
      // eslint-disable-next-line no-console
      .catch((err) => console.log(err));
  }, []);

  return (
    <AboutContentContainer>
      <AboutTextContainer>
        <AboutText>
          Je m&apos;appelle <strong>Sylvain Laconi</strong> et je suis
          développeur web.
        </AboutText>
      </AboutTextContainer>
      <AboutTextContainer>
        <AboutText>
          Après plus de 12 années dans le secteur de la distribution
          d&apos;articles de sport, j&apos;ai décidé de me lancer dans les
          métiers de la tech.
          <br />
          En mars 2021, j&apos;ai démarré une formation de développeur web / web
          mobile à la Wild Code School.
        </AboutText>
      </AboutTextContainer>
      <AboutTextContainer>
        <AboutText>
          Passionné depuis toujours par le sport, je travaille depuis le mois
          d&apos;août 2021 au sein de la <strong>start-up X-Tract</strong> en
          tant que développeur web et mobile.
          <br />
          Avec mon équipe, je développe des applications web et mobile en{' '}
          <strong>React</strong> et <strong>React Native</strong>, permettant
          d&apos;améliorer la sécurité des sportifs lors d&apos;épreuves en
          milieu naturel.
        </AboutText>
      </AboutTextContainer>
      <AboutTextContainer>
        <AboutText>
          Animé par le <strong>challenge</strong> et toujours désireux de
          découvrir de nouveaux projets, je vous invite à{' '}
          <HashLink
            smooth
            to="/#contact"
            style={{ fontWeight: 'bold', textDecoration: 'underline' }}
          >
            me contacter
          </HashLink>{' '}
          afin d&apos;échanger sur une possible future collaboration.
        </AboutText>
      </AboutTextContainer>
      <AboutCVContainer>
        <a
          href={cvUrl}
          download="CV_Sylvain_Laconi"
          target="_blank"
          rel="noreferrer"
        >
          <DownloadButton type="button">Télécharger mon CV</DownloadButton>
        </a>
      </AboutCVContainer>
    </AboutContentContainer>
  );
};

export default AboutContent;

const AboutContentContainer = styled(ContentContainer)`
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 1280px) {
    justify-content: flex-start;
  }
`;

const AboutTextContainer = styled(ContainerFlexRow)`
  width: 100%;
  justify-content: center;
  margin-bottom: 30px;
  @media (max-width: 1280px) {
    align-items: flex-start;
    margin-bottom: 15px;
  }
`;

const AboutCVContainer = styled(ContainerFlexRow)`
  width: 100%;
  justify-content: center;
  @media (max-width: 768px) {
    align-items: flex-start;
  }
`;

const DownloadButton = styled.button`
  cursor: pointer;
  font-size: 18px;
  background-color: ${FONT_BLUE};
  color: beige;
  width: 200px;
  height: 50px;
  @media (max-width: 768px) {
    font-size: 12px;
    width: 150px;
    height: 40px;
  }
`;

const AboutText = styled.p`
  font-size: 18px;
  line-height: 2rem;
  text-align: center;
  margin: 0;
  line-height: 3;
  @media (max-width: 768px) {
    font-size: 12px;
    text-align: justify;
    line-height: 2;
  }
  @media (min-width: 768px) and (max-width: 1800px) {
    font-size: 16px;
    text-align: center;
    line-height: 2;
  } ;
`;
