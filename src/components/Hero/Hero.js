import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
         A fullstack Webdeveloper improving skills, day by day and learning new things..
        </SectionText>
        <Button onClick={()=> window.location = "#projects"}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;