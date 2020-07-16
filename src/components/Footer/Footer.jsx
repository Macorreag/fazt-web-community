/* Copyright 2020 Fazt Community ~ All rights reserved. MIT license. */

import React from 'react';
import './Footer.scss';

import discordIcon from '@assets/img/discordIcon.png';
import githubIcon from '@assets/img/githubIcon.png';
import arrowUp from '@assets/img/icons/arrow.svg';

const Footer = () => {
  return (
    <div className="footer">
      <ul className="footer__ul leftSide">
        {/* no links for now*/}
        <li className="footer__li">Proyectos</li>
        <li className="footer__li">Contribuidores</li>
        <li className="footer__li">Registrarse</li>
      </ul>
      <ul className="footer__ul centerSide">
        <li className="footer__li">All Right Reserve</li>
      </ul>
      <div className="footer__ul rightSide">
        <div className="footer__icons">
          <img src={discordIcon} alt="" />
          <img src={githubIcon} alt="" />
        </div>
        <div className="footer__goUp">
          <img src={arrowUp} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Footer;
