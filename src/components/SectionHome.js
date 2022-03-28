import React, { useEffect, useState } from 'react'
import './SectionHome.css'

const SectionHome = () => {
    const testText = "Developer";
    const [cursor,setCursor] = useState("|");
    const [textTyping,setTextTyping] = useState("");
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
            await delay(2200);
            setCursor("");
            await delay(500);
        }
    }
    useEffect(()=>{
        cursorTyping()
        typingText()
    },[])
    return (
    <section>
        <div className="home-image">
            <h1>Chaiyut Kongprawat</h1>
            <p>I'm <span>{textTyping}{cursor}</span></p>
            
        </div>
    </section>
  )
}

export default SectionHome