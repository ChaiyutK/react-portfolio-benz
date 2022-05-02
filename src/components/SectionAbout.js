
import React from 'react'
import './SectionAbout.css'
import AOS from 'aos'
import 'aos/dist/aos.css';
AOS.init();

const SectionAbout = () => {
  return (
    <section id="about" className="about">
        <h1 className="header-about" data-aos="fade-up">
            About
        </h1>
        <p className='header-about-content' data-aos="fade-up">
        Hello everyone i'm graduate from prince of Songkla University with Bachelor of Science Major computer of Science Second Class Honors GPA 3.28. My major is Computer Science.
        </p>
        <div className="about-content">
            <div className="about-content-item aboutimage" data-aos="fade-right">
                <img src="https://scontent.fhdy4-1.fna.fbcdn.net/v/t31.18172-8/14500710_10202238536560446_19146877131162990_o.jpg?_nc_cat=108&ccb=1-5&_nc_sid=174925&_nc_eui2=AeGNHFDDbwf9wvw0TQzaxLerIg1gWuU6AVciDWBa5ToBVzK-BKkW6xluHemV4-P76PY&_nc_ohc=h1NjKn879WEAX9r_ktp&_nc_ht=scontent.fhdy4-1.fna&oh=00_AT8vIrr0vddBM8pblJqPsQmmkVQRJ7mcrhB_UcyZPp5TAQ&oe=6295F32A" width="100%" />
            </div>
            <div className="about-content-item aboutcontent" data-aos="fade-left">
                <h1>
                    Web Developer
                </h1>
                <p>
                I'm looking for a job, I'm interested in Web Developer and Game Developer but i open for the others like App Developer.
                </p>
            <div className="about-content">
                <div className="about-content-item aboutdetail">
                <ul>
                    <li>Birthday: 3 January 1998</li>
                    <li>Website: https://chaiyutk.github.io/react-portfolio-benz</li>
                    <li>Phone: +66 64038 1113</li>
                    <li>City: Songkhla,THAILAND</li>
                </ul>
                </div>
                <div className="about-content-item aboutdetail">
                <ul>
                    <li>Age: 24</li>
                    <li>Degree: Bachelor</li>
                    <li>E-mail: benzchaiyut.k@gmail.com</li>
                    <li>Freelance: Available</li>
                </ul>
                </div>
            </div>
            <p></p>
            </div>
        </div>
    </section>
    //end of section
  )
}

export default SectionAbout
