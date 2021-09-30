import React, { useEffect, useState } from 'react';
import { DownloadButton } from '../../styles/_buttons';
import {
  AboutTextContainer,
  AboutContentContainer,
  AboutCVContainer,
} from '../../styles/_containers';
import { AboutText } from '../../styles/_texts';
import firebase from '../../utils/FirebaseConfig';

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
          découvrir de nouveaux projets, je vous invite chaleureusement à{' '}
          <a href="www.google.fr">me contacter</a> si mon profil vous intéresse.
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
