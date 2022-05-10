import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./SectionContact.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const SectionContact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          alert("Thank you for contacting us!");
          e.target.reset();
      }, (error) => {
          console.log(error.text);
          alert("sorry can't send contact right now.");
      }
      );
  };
  console.log(process.env.REACT_APP_SERVICE_ID)
  return (
    
    <section className='contact' id="contact" data-aos="fade-up">
        <h1 className="header-contact">
        Contact Me
    </h1>
        <div>
            <form className='contact-form' ref={form} onSubmit={sendEmail}>
            <div className='contact-flexbox'>
                <div className='contact-item size50' data-aos="fade-right">
                <label>Your Name</label><br />
                <input className='contact-normal' type="text" name="name" placeholder='Name'/>
                </div>
                <div className='contact-item size50' data-aos="fade-left">
                <label>Your Email</label><br />
                <input className='contact-normal' type="email" name="email" placeholder='E-mail' />
                </div>
                <div className='contact-item size100' data-aos="fade-up">
                <label>Subject</label><br />
                <input className='contact-normal' type="text" name="subject" placeholder='subject' />
                </div>
                <div className='contact-item size100' data-aos="fade-up">
                <label>Message</label><br />
                <textarea name="message" />
                </div>
                <div className='contact-item size100'>
                <input className='contact-submit' type="submit" value="Send" />
                </div>
            </div>
            </form>
        </div>
    </section>
  )
}

export default SectionContact