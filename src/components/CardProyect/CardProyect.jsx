/* Copyright 2020 Fazt Community ~ All rights reserved. MIT license. */

//TODO: agregar esto en un boilerplate mejor
// const arrayProyects = [
//  {
//     name: "React",
//     url: "/img/icons/react.svg",
//     color: "#FFFFFF"
//  },
//  {
//     name: "GraphQL",
//     url: "/img/icons/graphql.svg",
//     color: "#FFFFFF"
//  },
//  {
//     name: "Python",
//     url: "img/icons/python.svg"
//     color: "#FFFFFF"
//  }]
//    const favAmount = 10
//    returns(
//   <CardProyect size={m-card} theme={white} nameProyect={nameProyect} imageUrl={imageUrl} arrayProyects={arrayProyects} favAmount={favAmount} >
// )

/**
 * <Component for showing details of the proyect>
 * @component
 * @param   {String}    size            Size of Card (Small / Medium / Big)
 * @param   {String}    theme           Theme of Component (For Future implementations)
 * @param   {String}    nameProyect     Name of Proyect
 * @param   {String}    imageUrl        Url Of Image Proyect
 * @param   {Array}     arrayProyects   Array of Technologies
 * @param   {Number}    favAmount       Amount of Favorites
 * @return  {<CardProyect>}
 * @example
 * const size = "s-card"
 * const theme = "white"
 * const nameProyect= "React App Name"
 * const imageUrl = "https://api/image.jpg"
 */

import React from 'react';
import PropTypes from 'prop-types';
import './CardProyect.scss';
import { usePalette } from 'react-palette';
import heartIcon from '@assets/img/icons/heart.svg';

const CardProyect = ({ nameProyect, imageUrl, arrayProyects, favAmount, size }) => {
  var { data } = usePalette(imageUrl);
  data = data.vibrant;
  if (!imageUrl) {
    data = arrayProyects[0].color;
    imageUrl = process.env.PUBLIC_URL + arrayProyects[0].url;
  }
  var backgroundStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover'
  };

  const styleCard = (size) => {
    if (size === 's-card') {
      return {
        height: '150',
        width: '100',
        fontTitle: 'small',
        fontDesc: 'x-small'
      };
    } else if (size === 'm-card') {
      return {
        height: '300',
        width: '200',
        fontTitle: 'large',
        fontDesc: 'medium'
      };
    } else if (size === 'b-card') {
      return {
        height: '600',
        width: '500',
        fontTitle: 'xx-large',
        fontDesc: 'x-large'
      };
    } else {
      return {
        height: '200',
        width: '150',
        fontTitle: 'medium',
        fontDesc: 'small'
      };
    }
  };

  return (
    <div
      className="proyectCard"
      style={{
        height: `${styleCard(size).height}px`,
        width: `${styleCard(size).width}px`
      }}
    >
      <div className="proyectCard__background" style={backgroundStyle}>
        <div className="proyectCard__container">
          <div className="proyectCard__container__upSide">
            <div className="proyectCard__container__upSide__containerImage">
              <img className="proyectCard__container__upSide__containerImage__image" src={imageUrl} alt="" />
            </div>
            <div className="proyectCard__container__upSide__containerBar">
              <div className="proyectCard__container__upSide__containerBar__icons">
                {arrayProyects.slice(0, 3).map((item, i) => (
                  /*for now the items do not redirect missing add the routes*/
                  <img
                    key={i}
                    className="proyectCard__container__upSide__containerBar__icons__iconArray"
                    src={process.env.PUBLIC_URL + item.url}
                    alt=""
                    srcSet=""
                  />
                ))}
              </div>
              <div className="proyectCard__container__upSide__containerBar__fav">
                <span
                  className="proyectCard__container__upSide__containerBar__fav__favAmount"
                  style={{ fontSize: styleCard(size).fontDesc }}
                >
                  {favAmount}
                </span>
                <img
                  className="proyectCard__container__upSide__containerBar__fav__favIcon"
                  src={heartIcon}
                  alt=""
                  srcSet=""
                />
              </div>
            </div>
          </div>
          <div
            id="proyectCard__container__downSide-id"
            className="proyectCard__container__downSide"
            onMouseEnter={() => {
              document.getElementById('proyectCard__container__downSide-id').style.backgroundColor =
                '#DB224A';
              document.getElementById('proyectCard__container__downSide-id').style.cursor = 'pointer';
            }}
            onMouseLeave={() => {
              document.getElementById('proyectCard__container__downSide-id').style.backgroundColor = data;
            }}
            style={{ backgroundColor: data }}
          >
            <span
              className="proyectCard__container__downSide__nameProyect"
              style={{ fontSize: styleCard(size).fontTitle }}
            >
              {nameProyect}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

CardProyect.propTypes = {
  size: PropTypes.string,
  theme: PropTypes.string,
  nameProyect: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  arrayProyects: PropTypes.array,
  favAmount: PropTypes.string.isRequired
};

CardProyect.defaultProps = {
  nameProyect: 'ups.. ',
  imageUrl: '',
  arrayProyects: [
    {
      name: 'NotFound',
      url: '/img/icons/notfound.svg',
      color: '#E04149'
    },
    {
      name: 'NotFound',
      url: '/img/icons/notfound.svg',
      color: '#E04149'
    },
    {
      name: 'NotFound',
      url: '/img/icons/notfound.svg',
      color: '#E04149'
    }
  ],
  favAmount: '-7',
  size: 'm-card',
  theme: 'white'
};

export default CardProyect;
