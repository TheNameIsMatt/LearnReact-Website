import './Sidebar_Home.css';
import './Utilities/Utilities.css';
import logo from './MyIcons/homeserve-white-logo.png';
import React, { Component } from 'react';
import { FaFacebook, FaHeart, FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";
import { useState } from 'react';




class Sidebar_Home extends Component {

    render() {
        return (
            <div className="Sidebar_Home card">
                <img className='logo' src={logo}></img>


                <div className='container'>
                    <ol>
                        <div className='max-width'>
                            <li><FaHeart></FaHeart></li>
                        </div>
                        <div className='max-width'>
                            <li><FaGithub></FaGithub></li>
                        </div>
                        <div className='max-width'>
                            <li><FaTwitter></FaTwitter></li>
                        </div>
                        <div className='max-width'>
                            <li><FaInstagram></FaInstagram></li>
                        </div>
                        <div className='max-width'>
                            <li><FaFacebook></FaFacebook></li>
                        </div>
                    </ol>
                </div>
            </div>
        );
    }
}

const handleMouseHover =()=> {

}
export default Sidebar_Home;
