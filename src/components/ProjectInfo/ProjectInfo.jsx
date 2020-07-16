/* Copyright 2020 Fazt Community ~ All rights reserved. MIT license. */

import React from 'react';
import './ProjectInfo.scss';
import Github from './svg/github.svg';
import URL from './svg/url.svg';
import TechLogo from '../TechLogos/TechLogos.jsx';
import PropTypes from 'prop-types';

const ProjectInfo = ({
  projectName,
  projectImage,
  projectDescription,
  arrayTech,
  projectGit,
  projectURL
}) => {
  return (
    <div className="projectInfo">
      <div className="title">
        <div className="Image">
          <img className="Image__1" src={projectImage} alt="img" />
        </div>
        <div className="description__2">
          <h1 className="title__4">Code & Demo</h1>
          <div className="hover">
            <div>
              <img src={Github} className="Image__3" alt="git" />
            </div>
            <div>
              <img src={URL} className="Image__3" alt="url" />
            </div>
          </div>

          <div className="hover__2">
            <div className="hover__3">
              <a className="hover__3" href={projectGit}>
                Click aqui
              </a>
            </div>
            <div className="hover__4">
              <a className="hover__4" href={projectURL}>
                URL
              </a>
            </div>
          </div>
        </div>
        <div className="description">
          <h1 className="title__1">{projectName}</h1>
          <h2 className="title__2">Descripcion del proyecto</h2>
          <p className="title__3">{projectDescription}</p>
          <div className="techLogo" >
          <h2 className="title__2">Tecnologia usada</h2>
            {arrayTech.map((item, i) => (
              <div key={i}>
                <TechLogo logo={process.env.PUBLIC_URL + item.url} text={item.name}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
ProjectInfo.propTypes = {
  projectName: PropTypes.string.isRequired,
  projectDescription: PropTypes.string.isRequired,
  projectImage: PropTypes.string.isRequired,
  arrayTech: PropTypes.array,
  projectGit: PropTypes.string,
  projectURL: PropTypes.string
};
ProjectInfo.defaultProps = {
  projectName: 'Nombre del proyecto',
  projectDescription:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi eos perspiciatis nemo itaque voluptatum odio architecto esse! Ipsa, quas modi.',
  projectImage: 'https://www.dekrs.com/img/image_not_found.png',
  arrayTech: [
    {
      name: 'not found',
      url: 'https://www.dekrs.com/img/image_not_found.png'
    },
    {
      name: 'not found',
      url: 'https://www.dekrs.com/img/image_not_found.png'
    },
    {
      name: 'not found',
      url: 'https://www.dekrs.com/img/image_not_found.png'
    }
  ],
  projectGit: '',
  projectURL: ''
};

export default ProjectInfo;
