import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillFacebook} from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem>8076993794</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="https://mail.google.com/mail/u/1/#inbox">
            yashvermadev12@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/taken-tag">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.facebook.com/profile.php?id=100013792096087">
            <AiFillFacebook size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
