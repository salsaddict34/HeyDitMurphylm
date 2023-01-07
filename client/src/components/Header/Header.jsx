import React from "react"
import Navbar from "../Navbar/Navbar"
// Import of pictures
import Hdmf from "../../assets/img/logo_hdmf.png"


export default function Header () {
    return (
            <div className='header'>
                <div className="header__logo__title">
                    <img className='header__logo' src={Hdmf} alt="Logo HeyDitMurphylm"/>
                    <h1>HeyDit<span>Murphy</span>lm</h1>
                </div>
                <div>
                   <Navbar />
                </div>

            </div>
    )
}