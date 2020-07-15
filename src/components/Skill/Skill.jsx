/* Copyright 2020 Fazt Community ~ All rights reserved. MIT license. */

import React from 'react';
import './Skill.scss';

const Skill = ({ image }) => {
  return (
    <div className="skill">
      <img src={image} alt={image} />
    </div>
  );
};

export default Skill;
