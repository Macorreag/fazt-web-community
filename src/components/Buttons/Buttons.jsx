/* Copyright 2020 Fazt Community ~ All rights reserved. MIT license. */

import React from 'react';
import './Buttons.scss';
import { Icon } from '../Icon/Icon.jsx';

export const ButtonSolid = ({ text }) => {
  return (
    <div className="ComponentBTNSolidClass">
      <span>{text}</span>
    </div>
  );
};

export const ButtonUnline = ({ text }) => {
  return (
    <div className="ComponentBTNUnlineClass">
      <span>{text}</span>
    </div>
  );
};

export const ButtonUnlineIcon = ({ text, icon, form, src }) => {
  return (
    <div className="ComponentBTNUnlineClass ">
      {(icon || src) && <Icon icon={icon} form={form} src={src} />}
      <span>{text}</span>
    </div>
  );
};
