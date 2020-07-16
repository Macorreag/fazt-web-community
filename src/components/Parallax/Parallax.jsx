/* Copyright 2020 Fazt Community ~ All rights reserved. MIT license. */

import React from 'react';
import './Parallax.scss';
import { ButtonUnlineIcon } from '../Buttons/Buttons.jsx';
import { Typewritter } from '../Typewritter/Typewritter.jsx';
import { Icon } from '../Icon/Icon.jsx';
import GitHubIcon from '@material-ui/icons/GitHub';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import DiscordSvg from '@assets/img/icons/discord-brands.svg';
import circuito from '@assets/img/icons/parallax.svg';
const Hero = () => {
  return (
    <div className="Parallax">
      <div
        className="circuito"
        style={{
          background: `url(${circuito})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="Parallax__redes">
          <ButtonUnlineIcon text="Discord" src={DiscordSvg} />
          <ButtonUnlineIcon text="Github" icon={GitHubIcon} form="icon--circule" />
        </div>
        <div className="welcome">
          <h1>FAZT TECH</h1>
          <Typewritter texts={['Unete a nosotros', 'Community']} />
        </div>

        <div>
          <Icon icon={KeyboardArrowDownIcon} form="arrow" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
