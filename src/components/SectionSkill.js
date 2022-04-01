import React from 'react'
import './SectionSkill.css'
import {FaHtml5,FaCss3Alt,FaReact,FaPhp,FaNodeJs} from "react-icons/fa";
import {SiJavascript,SiMysql} from "react-icons/si";
import {DiGit} from "react-icons/di";
import AOS from 'aos'
import 'aos/dist/aos.css';
AOS.init();

const SectionSkill = () => {
  return (
    <section className='skill' data-aos="fade-up">
        <h1 className="header-skill">
            Skills
        </h1>
        <p className='header-skill-content'>
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
        </p>
        <div className="skill-content">
                <div className="skill-content-item">
                <ul>
                    <li><FaHtml5 color='#E44D26'/> HTML</li>
                    <li><FaCss3Alt color='#264de4'/> CSS</li>
                    <li><SiJavascript color='#F0DB4F'/> JavaScript</li>
                    <li><FaReact color='#61DBFB'/> React</li>
                </ul>
                </div>
                <div className="skill-content-item">
                <ul>
                    <li><FaPhp color='#474A8A'/> PHP</li>
                    <li><SiMysql color='#00758F'/> SQL</li>
                    <li><DiGit color='#F1502F'/> Git Version Control</li>
                    <li><FaNodeJs color='#3c873a'/> Node.js</li>
                </ul>
                </div>
            </div>
    </section>
  )
}

export default SectionSkill