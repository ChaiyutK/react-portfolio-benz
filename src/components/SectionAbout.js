
import React from 'react'
import './SectionAbout.css'
import AOS from 'aos'
import 'aos/dist/aos.css';
AOS.init();

const SectionAbout = () => {
  return (
    <section id="about" className="about" data-aos="fade-up">
        <h1 className="header-about">
            About
        </h1>
        <p className='header-about-content'>
        Hello everyone i'm graduate from prince of Songkla University with Bachelor of Science Major computer of Science Second Class Honors. My major is Computer Science. I'm looking for a job, I'm interested in Web Developer and Game Developer but i open for the others like App Developer.
        </p>
        <div className="about-content">
            <div className="about-content-item aboutimage">
                <img src="images/homebg.jpg" width="100%" />
            </div>
            <div className="about-content-item aboutcontent">
                <h1>
                    Web Developer
                </h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            <div className="about-content">
                <div className="about-content-item aboutdetail">
                <ul>
                    <li>Birthday: 3 January 1998</li>
                    <li>Website: https://chaiyutk.github.io</li>
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
            <p>Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.</p>
            </div>
        </div>
    </section>
    //end of section
  )
}

export default SectionAbout