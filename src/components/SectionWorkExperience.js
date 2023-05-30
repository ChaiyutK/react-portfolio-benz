import React from 'react';
import './SectionWorkExperience.css';

const SectionWorkExperience = () =>{
    return(
        <section className='workexperience' data-aos="fade-up">
    <h1 className="header-workexperience">
    Work Exp.
    </h1>
    <div className="workexperience-list">
        <div className="workexperience-list-item">
            <h3>Software Developer at Borntodev Ltd. (InternShip)</h3>
            <p>May - July 2019</p>
        </div>
        <div className="workexperience-list-item">
            <ul>
                <li>- Develop a mobile game with unity engine</li>
                <li>- Game Design</li>
                <li>- Write Tecnology Content</li>
            </ul>
        </div>
        <div className="workexperience-list-item">
            <h3>Administrator at DSF Pet Hospital</h3>
            <p>Oct 2020 - Present</p>
        </div>
        <div className="workexperience-list-item">
        <ul>
                <li>- Maintenance System in Veterinary hospital</li>
                <li>- Test Veterinary Hospital Management System</li>
                <li>- Fix all hardware in Veterinary Hospital</li>
                <li>- Develop basic program such as vat7%, txtfile to excelfile</li>
        </ul>
        </div>
    </div>
    
</section>
    );
}
export default SectionWorkExperience;