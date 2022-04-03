import React, { useEffect, useState } from 'react'
import './SectionHome.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init()

const SectionHome = () => {
    const testText = "Developer";
    const [cursor,setCursor] = useState("|");
    const [textTyping,setTextTyping] = useState("");
    let checkSidebar = true;
    const delay = ms => new Promise(res => setTimeout(res, ms));
    
    const typingText = async () =>{
        while(true)
        {
        for(var i = 0;i<10;i++)
        {
            await delay(200);
            setTextTyping(testText.substring(0,i));
        }
            await delay(2000);
        for(i = 9; i>=0;i--)
        {
            await delay(100);
            setTextTyping(testText.substring(0,i));
        }
        }
    }

    const cursorTyping = async () =>{
        while(true)
        {
            setCursor("|");
            await delay(2400);
            setCursor("");
            await delay(300);
        }   
    }

    const openNav = () =>{
        if(document.getElementById("openbtn").innerHTML == "X")
        {
            document.getElementById("sidebar").style.transform = "translateX(-20rem)";
            document.getElementById("openbtn").innerHTML = "☰";
        }
        else
        {
            document.getElementById("sidebar").style.transform = "translateX(0rem)";
            document.getElementById("openbtn").innerHTML = "X";
        }
        console.log(checkSidebar);
        
    }
    useEffect(()=>{
        cursorTyping()
        typingText()
    },[])
    return (
    <section className='home'>
        <button className="openbtn" id='openbtn' onClick={openNav}>☰</button>
        <div className="home-image">
            <h1>Chaiyut Kongprawat</h1>
            <p>I'm <span>{textTyping}{cursor}</span></p>
        </div>
    </section>
  )
}

export default SectionHome