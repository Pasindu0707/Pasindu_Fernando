import React from 'react'
import './whatDo.css'
import phone from '../../assets/cell-phone.png'
import marketing from '../../assets/bullhorn.png'
import web from '../../assets/internet.png'
import trade from '../../assets/stock-market.png'

const WhatDo = () => {
  return (
    <div id='whatDo'>
        <span className='h4'>SERVICES</span>
        <span className='h1'>What I do</span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={web} alt="" className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Web Development</h2>
                    <p>Build extremely responsive web apps with the latest and cutting-edge technologies.</p>
                </div>
            </div>

            <div className='skillBar'>
                <img src={phone} alt="" className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>App Development</h2>
                    <p>Develop well-designed, user-friendly, and interactive mobile apps for both Android and iOS.</p>
                </div>
            </div>

            <div className='skillBar'>
                <img src={trade} alt="" className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Trading</h2>
                    <p>Pro Trader in cryptocurrency as well as in Colombo Stock Exchange.</p>
                </div>
            </div>

            <div className='skillBar'>
                <img src={marketing} alt="" className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Digital/Social Media Marketing</h2>
                    <p>Social and Digital Marketing skills shareholder of the company TriniphiX</p>
                </div>
            </div>
        </div>
        <div><hr className='line'/></div>
    </div>
  )
}

export default WhatDo
