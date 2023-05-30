import React from "react";
import "./SectionAchievement.css";
import AOS from 'aos'
import 'aos/dist/aos.css';
AOS.init();

const SectionAchievement = () =>{
    const achievementData = 
    [
        {
            year:"2022",
            detail:"Course Certificate Programming with JavaScript | Online non-credit course authorized by Meta",
            link:"https://www.coursera.org/account/accomplishments/verify/VXCVAN6TLQZK"
        },
        {
            year:"2019",
            detail:"2ND of Web Programming competition, 18th ITM Network game at Prince of Songkla University,Hat Yai"
        },
        {
            year:"2018",
            detail:"Winner of C Programming competition, 17th ITM Network game at Walailak University"
        },
        {
            year:"2017",
            detail:"2ND Runner up Thailand Master Cup 2017 League of Legend Game"
        },
        {
            year:"2016",
            detail:"Winner of Computer Quizz in 16th ITM Network Game at Thaksin University,Phathalung"
        }
    ]
    const achievementElement = achievementData.map((e,i)=>{
        if(e.year == 2022)
        {
        return(
                <div className="achievement-flexbox" key={i}>
                <div className="achievement-box" data-aos="fade-up">
                    <p>{e.year}</p>
                </div>
                <div className="achievement-box" data-aos="fade-up">
                    <p>{e.detail}<a className="verify" href={e.link} target="_blank">Verify</a></p>
                    
                </div>
                </div>
            );  
        }
        else{
            return(
                <div className="achievement-flexbox" key={i}>
                <div className="achievement-box" data-aos="fade-up">
                    <p>{e.year}</p>
                </div>
                <div className="achievement-box" data-aos="fade-up">
                    <p>{e.detail}</p>
                </div>
                </div>
            );
        }
        
    })

    return(
        <section className="achievement" data-aos="fade-up">
        <h1 className="header-achievement">
            Achievement
        </h1>
        {achievementElement}
        
        </section>
    );

}
export default SectionAchievement;