/* Copyright 2020 Fazt Community ~ All rights reserved. MIT license. */

import React from 'react';
import { ButtonSolid, ButtonUnline } from '../Buttons/Buttons.jsx';
import GitHubIcon from '@material-ui/icons/GitHub';

import './SocialLink.scss';
import DiscordSvg from '@assets/img/icons/discord-brands.svg';

const SocialLink = () => {
  return (
    <div className="socialLink">
      <div>
        <span className="socialLink__span">Únete</span> a nuestro Discord y{' '}
        <span className="socialLink__span">visita</span> nuestra organización en Github
      </div>
      <p className="socialLink__p">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate consectetur laudantium voluptas
        illo unde.
      </p>
      <div className="socialLink__links">
        <div className="socialLink__link">
          <img src={DiscordSvg} alt="discord" />
          <ButtonSolid text="ÚNETE" />
        </div>
        <div className="socialLink__link">
          <GitHubIcon fontSize="inherit" />
          <ButtonUnline text="VISÍTANOS" />
        </div>
      </div>
    </div>
  );
};

export default SocialLink;
