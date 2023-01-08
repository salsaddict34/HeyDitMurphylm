import React from "react"
import {Link} from "react-router-dom"
import {useState} from "react"

// Import of pictures
import Recommandation from "../../assets/img/recommandation.png"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBurger } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faComments } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

function Navbar () {

    const [showLinks, setShowLinks] = useState(false)

    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }

    return (
        <div>
             <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
                <ul className="navbar__links">
                    <li className="navbar__link"><Link to={'/'}><FontAwesomeIcon icon={faHouse} className="navbar__icon white__icon" size="2x"/><p>Accueil</p></Link></li>
                    <li className="navbar__link"><Link to={'/'}><FontAwesomeIcon size="2x" icon={faHeart} className="navbar__icon black__icon"/><p>Favoris</p></Link></li>
                    <li className="navbar__link"><Link to={'/'}><img src={Recommandation} alt="Recommandation" className="navbar__icon"/><p>Recommandations</p></Link></li>
                    <li className="navbar__link"><Link to={'/'}><FontAwesomeIcon size="2x" icon={faComments} className="navbar__icon black__icon"/><p>Chat</p></Link></li>
                    <li className="navbar__link"><Link to={'/'}><FontAwesomeIcon size="2x" icon={faUser} className="navbar__icon white__icon"/><p>Se connecter</p></Link ></li>
                    <li className="navbar__link"><Link to={'/'}><FontAwesomeIcon size="2x" icon={faUserPlus} className="navbar__icon black__icon"/><p>Inscription</p></Link></li>
                </ul>

                <button className="burger" onClick={handleShowLinks}>
                    <span className="burger__icon"><FontAwesomeIcon icon={faBurger} size="3x"/></span>
                </button>
                <button className="close" onClick={handleShowLinks}>
                    <span className="close__icon"><FontAwesomeIcon icon={faXmark} size="3x"/></span>
                </button>
            </nav>
        </div>
    )
}

export default Navbar;