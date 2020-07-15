/* Copyright 2020 Fazt Community ~ All rights reserved. MIT license. */
import React from 'react';
import './TechLogo.scss';

const TechLogo = ({ logo, text }) => {
  return (
    <div className="technologies__1">
      <img className="logo__1" src={logo} alt="tech" />
      <p className="logo__2">{text}</p>
    </div>
  );
};

export default TechLogo;
