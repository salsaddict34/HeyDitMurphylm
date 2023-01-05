import React from "react"
import {Link} from "react-router-dom"
// Import of pictures
import Hdmf from "../../assets/img/logo_hdmf.png"
import Home from "../../assets/img/home.png"
import Favorite from "../../assets/img/favorite.png"
import Recommandation from "../../assets/img/recommandation.png"
import Chat from "../../assets/img/chat.png"
import Connect from "../../assets/img/connect.png"
import Sign_up from "../../assets/img/sign_up.png"

export default function Header () {
    return (
        <div className='header'>
            <img className='header__logo' src={Hdmf} alt="Logo HeyDitMurphylm"/>

            <h1>HeyDit<span>Murphy</span>lm</h1>
            <nav>
                <ul>
                    <li><Link to={'/'}><img src={Home} alt="Home"/></Link></li>
                    <li><Link to={'/'}><img src={Favorite} alt="Favorite"/></Link></li>
                    <li><Link to={'/'}><img src={Recommandation} alt="Recommandation"/></Link></li>
                    <li><Link to={'/'}><img src={Chat} alt="Chat"/></Link></li>
                    <li><Link to={'/'}><img src={Connect} alt="Connect"/></Link></li>
                    <li><Link to={'/'}><img src={Sign_up} alt="Sign_up"/></Link></li>
                </ul>
            </nav>
        </div>
    )
}