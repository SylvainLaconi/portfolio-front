import React from 'react';
import {
  AboutTextContainer,
  AboutContentContainer,
} from '../../styles/_containers';
import { AboutText } from '../../styles/_texts';

const AboutContent = () => {
  return (
    <AboutContentContainer>
      <AboutTextContainer>
        <AboutText>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe,
          officia? Eaque repudiandae culpa ipsum consequatur ea aspernatur
          placeat quidem molestias optio! Placeat voluptas accusamus non quasi
          odit iure minima pariatur quod. Suscipit ipsum tempore veritatis
          explicabo unde placeat dolore nesciunt alias facilis ullam distinctio
          deleniti, in ea? Porro, ipsum veniam.
        </AboutText>
      </AboutTextContainer>
      <AboutTextContainer>
        <AboutText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
          fugit illum quisquam possimus at facilis eaque rerum mollitia
          perferendis maxime quasi temporibus accusantium aperiam nobis nostrum
          sapiente natus delectus pariatur.
        </AboutText>
      </AboutTextContainer>
      <a href="../../CV/CV_Sylvain_Laconi.pdf" download="CV_Sylvain_laconi.pdf">
        Télécharger mon CV
      </a>
    </AboutContentContainer>
  );
};

export default AboutContent;
