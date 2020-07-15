/* Copyright 2020 Fazt Community ~ All rights reserved. MIT license. */

import React from 'react';
import './Navigation.scss';
import faztCommunity from '@assets/img/faztCommunity.png';

import { ButtonSolid, ButtonUnline } from '../Buttons/Buttons'

const Navegation = () => {
  return (
    <div className="navigation">
      <ul className="navigation__ul-leftSide">
        {/*for now they are li but when the main components be created we make routes for SPA and use navlink/link*/}
        <li className="navigation__li">Proyectos</li>
        <li className="navigation__li">Contribuidores</li>
        <li className="navigation__li">Inicio</li>
      </ul>
      <img className="navigation__image" src={faztCommunity} alt="fazt-community" />
      <ul className="navigation__ul-rightSide">
        <li className="navigation__right__li"><ButtonUnline text="Registrarse" /></li>
        <li className="navigation__right__li"><ButtonSolid text="Iniciar Sesión" /></li>
      </ul>
    </div>
  );
};

export default Navegation;
