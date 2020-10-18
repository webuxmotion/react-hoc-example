import React from 'react';

import Title from '../../assets/title.svg';
import Logo from '../../assets/logo.svg';
import GithubLogo from '../../assets/github-logo.svg';

import './hero.styles.scss';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__body">
        <img src={Logo} alt="React HOC example logo" className="hero__logo" />
        <img src={Title} alt="React HOC example" className="hero__title-image" />
      </div>
      <div className="hero__box hero__box--green"></div>
      <div className="hero__box hero__box--red"></div>
      <a 
        className="hero__github-link" 
        target="_blank" 
        href="https://github.com/webuxmotion/react-hoc-example"
        rel="noopener noreferrer"
      >
        <img src={GithubLogo} alt="Github Logo" className="hero__github-image" />
      </a>
    </div>
  )
}

export default Hero;
