import React from 'react';
import './SectionEducation.css';
import AOS from 'aos'
import 'aos/dist/aos.css';
AOS.init();

const SectionEducation = () => {
    return(
    <section className='education' data-aos="fade-up">
    <h1 className="header-education">
        Education
    </h1>
    <div className="education-list">
        <div className="education-list-item">
            <h3>Bachelor of Science Major computer of Science</h3>
            <p className='date'>2016-2020</p>
        </div>
        <div className="education-list-item">
            <p>Prince of Songkla University, Hat Yai, TH</p>
        </div>
        <div className="education-list-item">
            <p>Second Class Honors GPA 3.28</p>
        </div>
        <div className="education-list-item">
            <h3>Relevant Coursework:</h3>
        </div>
        <div className="education-list-item">
            <p>Web Programming,Graphics Design,Advance Java Programming,Software Interactive Design,Principles of Database System,Algorithm Analysis & Design,Intro to object-oriented Programming,Computer Game Programming,Project In Computer Science</p>
        </div>
        <div className="education-list-item">
            <h3>Relevant Project:</h3>
        </div>
        <div className="education-list-item">
            <p>Adviser System, Veterinary Hospital Management System, 3D Game Tower defender</p>
        </div>
    </div>
    
</section>
);

}

export default SectionEducation;