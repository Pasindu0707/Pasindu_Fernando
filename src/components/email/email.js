import React from 'react'
import contact from '../../assets/contact.png'
import phone from '../../assets/phone.gif'
import './email.css'

const Email = () => {
  return (
    <section className='emailPage' id='email'>
        <hr className='hrEmial'></hr>
        <h3 className='over'>LETS CONNECT !!</h3>
        <h1 className='overtxt'> Contact Me</h1>
        <div className='contactPage'>
            <div className='number'>
                <img alt='' className='contact'src={contact}/>
                <p className='para'>Connect with me on phone</p>
                <div className='num'>
                <img className='phone'alt='' src={phone}/>
                <p>077-8909086</p>
                </div>
            </div>
            <div className='form'>
                <form className='contactForm'>
                    <input type="text" className='name' placeholder='Your Name'/>
                    <input type="email" className='email' placeholder='Your Email'/>
                    <textarea name="message" className='msg' rows="5" placeholder='your Message'></textarea>
                    <button type='submit' value='Send' className='submitBtn'>Submit</button> 
                </form>
            </div>
        </div>
    </section>
  )
}

export default Email
