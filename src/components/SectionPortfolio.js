import React from 'react';
import './SectionPortfolio.css';


const SectionPortfolio = () => {
    const portfolio = [{
        topic : "Veterinary Hospital Management System",
        content : "this web-app is my final project of Project In Computer Science.Pet Hospital Management use for management about treatment in pet Hospital.",
        image : "/public/images/PetHospitalProject.png"
    },
    {
        topic : "GOODSOUNDEFFECT",
        content : "this website made for editor who want to download sound effect.",
        image : "/public/images/GoodSoundEffect.png"
    },
    {
        topic : "CREATEBLOCKCODE",
        content : "this project creates when I internship in borntodev company this is 2.5D Tower Defender game this project create for beginner who want to be programmer because this game will teach player with visual scripting in game. I use C# and Bolt visual scripting to create this game.",
        image : "/public/images/CreateBlockCodeProject.jpg"
    }
]

const portfolio_item = portfolio.map((e,i)=>{
    return(
    <div className="portfolio-list-item" key={i}>
        <h3>{e.topic}</h3>
        <p>{e.content}</p>
    </div>
    );
})

  return (
<section className='portfolio' data-aos="fade-up">
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