import React from 'react';
import './Header.css';
import {FaGithub,FaFacebookF,FaLinkedin,FaTwitter,FaInstagram} from "react-icons/fa";
import {BiHome} from "react-icons/bi";
import {BsPerson} from "react-icons/bs";
import { IconContext } from 'react-icons';
import {HiOutlineDocument} from 'react-icons/hi';
import {GoMail} from 'react-icons/go';
const Header = () =>{
    const photoUrl ="https://scontent.fhdy4-1.fna.fbcdn.net/v/t1.6435-9/119435849_10208170376812745_7754834136294344952_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFvdijxx8kr0tNARA6SJP4QhgQV18LqUJqGBBXXwupQmia6L3pN1CXNHGpwT5U9jzM&_nc_ohc=BtkjMM2i7oQAX-nHYqm&_nc_ht=scontent.fhdy4-1.fna&oh=00_AT8FooyXzROhUcRptaLLfcxMo4XXdYKst7WssrX7sEszzQ&oe=6264B4B2"
    return(
        <header>
            <div className="sidebar">
                <div className="sidebar-profile">
                    <img className="sidebar-profile-image" src={photoUrl} alt="profile" width="104px" height="104px" />
                    <h1>Chaiyut Kongprawat</h1>
                    <IconContext.Provider value={{color:"white",size:"15"}}>
                    <ul className='sidebar-profile-social'>
                        <li className="sidebar-profile-social-item"><a href="#"><FaGithub/></a></li>
                        <li className="sidebar-profile-social-item"><a href="#"><FaFacebookF/></a></li>
                        <li className="sidebar-profile-social-item"><a href="#"><FaInstagram/></a></li>
                        <li className="sidebar-profile-social-item"><a href="#"><FaTwitter/></a></li>
                        <li className="sidebar-profile-social-item"><a href="#"><FaLinkedin/></a></li>
                    </ul>
                    </IconContext.Provider>
                </div>
                <div className="sidebar-navbar">
                <IconContext.Provider value={{size:"25"}}>
                    <ul>
                        <li className="sidebar-navbar-item"><a href="#"><BiHome className="sidebar-navbar-item-icon"/><span>Home</span></a></li>
                        <li className="sidebar-navbar-item"><a href="#about"><BsPerson className="sidebar-navbar-item-icon"/><span>About</span></a></li>
                        <li className="sidebar-navbar-item"><a href="#"><HiOutlineDocument className="sidebar-navbar-item-icon"/><span>Portfolio</span></a></li>
                        <li className="sidebar-navbar-item"><a href="#"><GoMail className="sidebar-navbar-item-icon"/><span>Contact</span></a></li>
                    </ul>
                </IconContext.Provider>
                </div>
            </div>
        </header>
    );
}
export default Header