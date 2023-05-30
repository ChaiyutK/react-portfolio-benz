import React from 'react';
import './SectionPortfolio.css';
import AOS from 'aos'
import 'aos/dist/aos.css';
import {FaGithub} from "react-icons/fa";
import {FiLink} from "react-icons/fi";
AOS.init();

const SectionPortfolio = () => {
    const portfolio = [{
        topic : "VET Hospital Management System",
        image : "https://i.imgur.com/U2WailS.png",
        github : "https://github.com/ChaiyutK/Pet-Hospital-management-project",
        link : "#"
    },
    {
        topic : "GOODSOUNDEFFECT",
        image : "https://i.imgur.com/jTdH6nh.png",
        github : "https://github.com/ChaiyutK/GoodSoundEffect",
        link : "https://goodsoundeffect.000webhostapp.com/"
    },
    {
        topic : "CREATEBLOCKCODE",
        image : "https://i.imgur.com/ZfZFLjf.jpg",
        github : "#",
        link : "#"
    },
    {
        topic : "Portfolio Website 1",
        image : "https://i.imgur.com/onYFpze.png",
        github : "https://github.com/ChaiyutK/ChaiyutK.github.io",
        link : "https://chaiyutk.github.io/"
    },
    {
        topic : "Portfolio Website React",
        image : "https://i.imgur.com/usqYdO0.png",
        github : "https://github.com/ChaiyutK/react-portfolio-benz",
        link : "https://chaiyutk.github.io/react-portfolio-benz/"
    },
    {
        topic : "CryptoCurrency Price List",
        image : "https://i.imgur.com/pHvMRKY.png",
        github : "https://github.com/ChaiyutK/crypto-check",
        link : "https://zingy-salamander-cfbee0.netlify.app/"
    },
    {
        topic : "Weather forecast Webapp",
        image : "https://i.imgur.com/lsroXwA.png",
        github : "https://github.com/ChaiyutK/weather-webapp",
        link : "https://genuine-valkyrie-7e13d8.netlify.app/"
    },
    {
        topic : "Where in the world?",
        image : "https://i.imgur.com/Fz0QEUn.jpeg",
        github : "https://github.com/ChaiyutK/rest-countries-api-with-color-theme-switcher-master",
        link : "https://capable-croquembouche-bbb4bc.netlify.app/"
    }
]


const portfolio_item = portfolio.map((e,i)=>{
    return(
    <div className="portfolio-list-item" key={i}>
        <h4>{e.topic}</h4>
    <div className='show-image'>
        <img src={`${e.image}`} />
        <a className="github" href={`${e.github}`} rel="noreferrer" target="_blank"><FaGithub size={20} color="white"/></a>
        <a className="link" href={`${e.link}`} rel="noreferrer" target="_blank"><FiLink size={20} color="white"/></a>
    </div>
    </div>
    );
})

  return (
<section id="portfolio" className='portfolio' data-aos="fade-up">
    <h1 className="header-portfolio">
        Portfolio
    </h1>
    <div className="portfolio-list">
        {portfolio_item}
    </div>
</section>
  );
}

export default SectionPortfolio;