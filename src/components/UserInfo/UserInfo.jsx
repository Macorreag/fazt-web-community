import React from 'react'
import Image from '../../assets/img/faztCommunity.png'
import Github from '../UserInfo/svg/github.svg';
import URL from '../UserInfo/svg/url.svg';
import './UserInfo.scss'
import PropTypes from 'prop-types'

const UserInfo = ({userName, userRole, userDescription, userImage, userHabilities, userGit, userURL}) => {
    return (
        <div>
            <div className="UserInfo">
                <div className="user-description">
                    <div className="hab">
                        <h1 className="Title__4">Habilidades</h1>
                        <div>
                            <div className="user-logos">
                                {userHabilities.map((item, i) => (
                                    <div className={`user-logos__${i}`}>
                                        <img className="user-logo__1" src={item.url} alt="tech" />
                                        <p className="user-logo__2">{item.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="hab__2">
                        <h1 className="Title__4">Enlaces</h1>
                        <div className="user-hover">
                            <div>
                                <img src={Github} className="image__3" alt="git" />
                            </div>
                            <div>
                                <img src={URL} className="image__3" alt="url" />
                            </div>
                        </div>

                        <div className="user-hover__2">
                            <div className="user-hover__3">
                                <a className="user-hover__3" href={userGit}>
                                    Click aqui
                                </a>
                            </div>
                            <div className="user-hover__4">
                                <a className="user-hover__4" href={userURL}>
                                    URL
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="image">
                    <img className="image__1" src={userImage} alt="img"/>
                </div>
                <div className="Title">
                    <h1 className="Title__1">{userName}</h1>
                    <h2 className="Title__2">{userRole}</h2>
                    <p className="Title__3">{userDescription}</p>
                </div>
            </div>
        </div>
    )
}
UserInfo.propTypes = {
    userName: PropTypes.string,
    userRole: PropTypes.string,
    userDescription: PropTypes.string,
    userImage: PropTypes.string,
    userHabilities: PropTypes.array,
    userGit: PropTypes.string,
    userURL: PropTypes.string
}

UserInfo.defaultProps = {
    userName: 'Nombre de Usuario',
    userRole: 'Fullstack',
    userDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis iste velit doloremque dolore eius voluptatibus sit molestiae commodi, unde itaque, accusantium modi optio in! Consequatur assumenda corporis aperiam fuga dicta?',
    userImage: Image,
    userHabilities:[
        {
            name: 'not found',
            url: 'https://www.dekrs.com/img/image_not_found.png',
          },
          {
            name: 'not found',
            url: 'https://www.dekrs.com/img/image_not_found.png',
          },
          {
            name: 'not found',
            url: 'https://www.dekrs.com/img/image_not_found.png',
          },
          {
            name: 'not found',
            url: 'https://www.dekrs.com/img/image_not_found.png',
          },
    ],
    userGit: '',
    userURL: '' 
}

export default UserInfo

