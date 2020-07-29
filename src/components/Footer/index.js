import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      
      <a href="https://www.linkedin.com/in/lucas-g-79491abb/">
        <img href="https://image.flaticon.com/icons/png/512/124/124011.png" alt="Logo Linkedin" />
      </a>
      <p>
        Desenvolvido por 
        {' '}
        <a href="https://www.linkedin.com/in/lucas-g-79491abb/">
          Lucas 💻
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
