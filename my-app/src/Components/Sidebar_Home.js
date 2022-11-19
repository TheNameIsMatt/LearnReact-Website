import './Sidebar_Home.css';
import './Utilities/Utilities.css';
import logo from './MyIcons/homeserve-white-logo.png';
import React from 'react';
import { FaFacebook, FaHeart, FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";





class Sidebar_Home extends React.Component {
    constructor(props){
        super(props)
        this.state = { name: "Matt"};
    }
    
    render() {
        return (
            <div className="Sidebar_Home card">
                <img className='logo' src={logo}></img>


                <div className='container'>
                    <ol>
                        <div className='max-width'>
                            <li><FaHeart
                            onMouseEnter={() => handleMouseEnter(this.state)}
                            onMouseLeave={() => handleMouseLeave(this.props.pageName)}>
                            <div id="hoverslidepanel" className='hoverslidepanel card'>
                            <p>Boo</p>
                        </div></FaHeart></li>

                        </div>
                        <div className='max-width'>
                            <li onClick={() => {console.log(this.state.name)}}><FaGithub></FaGithub></li>
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
const handleMouseEnter =(state)=> {
    console.log(state.name)
}
const handleMouseLeave =(pageName)=> {
    console.log(pageName)
}
export default Sidebar_Home;
