/* Copyright 2020 Fazt Community ~ All rights reserved. MIT license. */

import React from 'react';
import './Typewritter.scss'

export const Typewritter = (props) => {
  const { texts } = props;
  let count = 0;
  let index = 0;
  let currentText = '';
  let letter = '';
  let deleteTxt = false;
  let time = 200;
  let writing = 200;

  document.addEventListener('DOMContentLoaded', () => {
    type();
  });

  const type = () => {
    if (count === texts.length) {
      count = 0;
    }
    currentText = texts[count];
    if (!deleteTxt) {
      letter = currentText.slice(0, ++index);
    } else {
      letter = currentText.slice(index.length, --index);
    }
    document.querySelector('.typing').textContent = letter;

    if (letter.length === currentText.length) {
      deleteTxt = true;
    }
    if (deleteTxt) {
      time /= 1.2;
    }
    if (letter.length === 1) {
      time = writing;
      deleteTxt = false;
      count++;
    }
    setTimeout(type, time);
  };

  return (
    <>
      <p className="typing"></p>
    </>
  );
};

Typewritter.defaultProps = {
  text: 'Coloca un texto'
};
