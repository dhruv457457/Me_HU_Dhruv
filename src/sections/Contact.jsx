import React from 'react'
import style from './Contact.module.css'
function Contact() {
  return (
    <section id='contact' className={style.container} >
        <h1 className='sectionTitle' >CONTACT</h1>
        <form action="">
            <div className='formGroup' >
                <label htmlFor="name" hidden>Name</label>
              <input type="text" id='name' name='name' placeholder='Name' required />
            </div>
            <div className='formGroup' >
                <label htmlFor="email" hidden>Email</label>
              <input type="text" id='email' name='email' placeholder='Email' required />
            </div>
            <div className='formGroup' >
                <label htmlFor="message" hidden>Message</label>
              <textarea  id='message' name='message' placeholder='message' required ></textarea>
            </div>
        <input className='hover btn' type="submit" value="Submit" />    
        </form>

    </section>
  )
}

export default Contact