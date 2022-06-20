
import React from 'react'
import './SectionAbout.css'
import AOS from 'aos'
import 'aos/dist/aos.css';
AOS.init();

const SectionAbout = () => {
    const d = new Date();
    const age = d.getFullYear()-1998;

  return (
    <section id="about" className="about">
        <h1 className="header-about" data-aos="fade-up">
            About
        </h1>
        <p className='header-about-content' data-aos="fade-up">
        Hello everyone i'm graduate from Prince of Songkla University Hatyai Campus with Bachelor of Science Major computer of Science Second Class Honors GPA 3.28. My major is Computer Science.
        </p>
        <div className="about-content">
            <div className="about-content-item aboutimage" data-aos="fade-right">
                <img src={process.env.PUBLIC_URL + '/images/about_profile.jpg'} width="100%" />
            </div>
            <div className="about-content-item aboutcontent" data-aos="fade-left">
                <h1>
                    Web Developer
                </h1>
                <p>
                I'm looking for a job, I'm interested in Web Developer and Front-end Developer but i open for the others like App Developer.
                </p>
            <div className="about-content">
                <div className="about-content-item aboutdetail">
                <ul>
                    <li>Birthday: 3 January 1998</li>
                    <li>Military Status: Exempted by Being Undersize</li>
                    <li>Website: https://chaiyutk.github.io/react-portfolio-benz</li>
                    <li>Phone: +66 64038 1113</li>
                    <li>City: Songkhla,THAILAND</li>
                </ul>
                </div>
                <div className="about-content-item aboutdetail">
                <ul>
                    <li>Age: {age}</li>
                    <li>Marital Status: Single</li>
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
