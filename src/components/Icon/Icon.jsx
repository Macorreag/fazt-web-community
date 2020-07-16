/* Copyright 2020 Fazt Community ~ All rights reserved. MIT license. */
import React from 'react';
import './Icon.scss';


export const Icon = ({ src, icon: ComponentIcon, form }) => {
  console.log('src'+src);
  if (!ComponentIcon) {
    console.log('hasta aqui llego');
    return <img className={'icon ' + form} src={src} alt="icon" />;
  } else {
    console.log('else');
    return <ComponentIcon className={'icon ' + form}/>;
  }
};
