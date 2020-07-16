/* Copyright 2020 Fazt Community ~ All rights reserved. MIT license. */

import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';
import faztCommunity from '@assets/img/faztCommunity.png';

const Navegation = () => {
  return (
    <div className="navigation">
      <ul className="navigation__ul-leftSide">
        {/*for now they are li but when the main components be created we make routes for SPA and use navlink/link*/}
        <li className="navigation__li">
          <Link to="/projects">Proyectos</Link>
        </li>
        <li className="navigation__li">
          <Link to="/contributions">Contribuidores</Link>
        </li>
        <li className="navigation__li">
          <Link to="/">Inicio</Link>
        </li>
      </ul>
      <img className="navigation__image" src={faztCommunity} alt="fazt-community" />
      <ul className="navigation__ul-rightSide">
        <li className="navigation__li">
          <Link to="/login">Iniciar sesión</Link>
        </li>
        <li className="navigation__li">
          <Link to="/register">Registrarse</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navegation;
