/* Copyright 2020 Fazt Community ~ All rights reserved. MIT license. */

import React, { Fragment, useState } from 'react';
import './CardContributor.scss';
import Skill from '../Skill/Skill';
import FaztLogo from '@assets/img/icons/FaztLogo.svg';

const CardContributor = () => {
  const [nameVisble, setNameVisibility] = useState(false);
  let availableImage = '';
  return (
    <div className="contributor__container">
      <div
        className="contributor__card"
        onMouseEnter={() => setNameVisibility((prevState) => !prevState)}
        onMouseLeave={() => setNameVisibility((prevState) => !prevState)}
      >
        {availableImage ? (
          <Fragment>
            <div
              className="contributor__backgroundImage"
              style={{
                backgroundImage: `url(${availableImage})`
              }}
            ></div>
            <div className="contributor__img">
              <img src={availableImage} alt="" />
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <div className="contributor__noImage"></div>
            <div className="contributor__img">
              <img src={FaztLogo} alt="" />
            </div>
          </Fragment>
        )}

        {nameVisble && (
          <div className="contributor__name">
            <span>Joe Doe</span>
            <p className="contributor__charge"> Backend</p>
          </div>
        )}

        <div className="contributor__skills">
          <Skill image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" />
          <Skill image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1024px-GraphQL_Logo.svg.png" />
          <Skill image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png" />
        </div>
      </div>
    </div>
  );
};

export default CardContributor;
