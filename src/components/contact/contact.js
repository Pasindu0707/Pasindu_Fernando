import React, { useState } from 'react';
import vaz from '../../assets/vaz.png'
import maris from '../../assets/maris (1).png'
import sliit from '../../assets/sliit.jpeg'
import surecore from '../../assets/surecore.svg'
import './contact.css'

const Contact = () => {
  const [activeTab, setActiveTab] = useState('work'); 

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className='experiences' id='experiences'>
        <hr className='line'></hr>
        <div className="buttonContainer">
        <button className={`button ${activeTab === 'work' ? 'active' : ''}`} onClick={() => handleTabChange('work')}>Work</button>
        <button className={`button ${activeTab === 'education' ? 'active' : ''}`} onClick={() => handleTabChange('education')}>Education</button>
      </div>
      <h3 className='over'>OVER 3 YEARS OF EXPERIENCE</h3>
      <h1 className='overtxt'>My Experience</h1>
      <div className='exp'>
        {activeTab === 'work' && (
          <div>
            <h2 className='topic'>Work Experience</h2>
            <div className='Bar'>
                <img src={surecore} alt="" className='BarImg'/>
                <div className='BarText'>
                    <h2>Surecore (PVT) Ltd</h2>
                    <p><label className='label'>2023-Present</label><br/>Currently Working as the Full Stack Developer (Intern) of Surecore (PVT) Ltd </p>
                </div>
            </div>
        </div>
        )}
        {activeTab === 'education' && (
          <div>
            <h2 className='topic'>Education</h2>
            <div className='Bar'>
                <img src={sliit} alt="" className='BarImg'/>
                <div className='BarText'>
                    <h2>SLLIT</h2>
                    <p><label className='label'>2021 - Present<br/></label>
BSc (Hons) in Information Technology
Specilization in Software Engineering
Sri Lanka Institute of Information Technology - SLIIT</p>
                </div>
            </div>
            <div className='Bar'>
                <img src={maris} alt="" className='BarImg'/>
                <div className='BarText'>
                    <h2>Maris Stella College Thimbirigaskatuwa</h2>
                    <p><label className='label'>2018 - 2020<br/></label>
Advanced Level , Maris Stella College Thimbirigaskatuwa</p>
                </div>
            </div>
            <div className='Bar'>
                <img src={vaz} alt="" className='BarImg'/>
                <div className='BarText'>
                    <h2>Joseph Vaz College , Wennappuwa</h2>
                    <p> <label className='label'>2007-2017</label><br/>Grade 1 to Odinary level education</p>
                </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
