import React from 'react';
import './intro.css';
import bg from '../../assets/final.png';
import git from '../../assets/git.svg';
import instagram from '../../assets/instagram.svg';
import fb from '../../assets/facebook.svg';
import linkedin from '../../assets/linkedin.svg';

const Intro = () => {
  return (
    <section id="intro">
      <img src={bg} alt='' className='bg' />
      <div className='introContent'>
        <span className='hello'>Hello!</span>
        <span className='introText'>
          I'm <span className='introName'> Pasindu Fernando</span>
          <br />
          a Software Engineer
        </span>
        <p className='introPara'>
          I am an undergraduate following BSc (Hons) <br />
          in Information Technology - Software Engineering, <br />
          with a passion for entrepreneurship and digital marketing
        </p>
        <div className='btn'>
          <a href='https://github.com/Pasindu0707' target='_blank' rel='noopener noreferrer'>
            <img src={git} className='btnIcon' alt='GitHub' />
          </a>
          <a href='https://www.facebook.com/maliya.fernando' target='_blank' rel='noopener noreferrer'>
            <img src={fb} className='btnIcon' alt='Facebook' />
          </a>
          <a href='https://www.instagram.com/_pasindu_fernando/' target='_blank' rel='noopener noreferrer'>
            <img src={instagram} className='btnIcon' alt='Instagram' />
          </a>
          <a href='https://www.linkedin.com/in/pasindu-fernando-525357191/' target='_blank' rel='noopener noreferrer'>
            <img src={linkedin} className='btnIcon' alt='LinkedIn' />
          </a>
        </div>
      </div>
      <div><hr className='line'/></div>
    </section>
  );
};

export default Intro;
