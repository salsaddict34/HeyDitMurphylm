import React from "react"
import {Link} from "react-router-dom"
// Import of pictures
import Recommandation from "../../assets/img/recommandation.png"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBurger } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faComments } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

export default function Navbar () {
    return (
        <div>
            {/* <nav>
                <ul>
                    <li>
                        <label htmlFor="toggle"><FontAwesomeIcon icon={faBurger} size="4x"/></label>
                        <input type="checkbox" id="toggle"/>
                        <ul className="dropdown-content">
                            <li><Link to={'/'}><img src={Home} alt="Home" className="navbar--link"/><p>ACCUEIL</p></Link></li>
                            <li><Link to={'/'}><img src={Favorite} alt="Favorite"/><p>FAVORIS</p></Link></li>
                            <li><Link to={'/'}><img src={Recommandation} alt="Recommandation"/><p>RECOMMANDATIONS</p></Link></li>
                            <li><Link to={'/'}><img src={Chat} alt="Chat"/><p>CHAT</p></Link></li>
                            <li><Link to={'/'}><img src={Connect} alt="Connect"/><p>SE CONNECTER</p></Link></li>
                            <li className="last"><Link to={'/'}><img src={Sign_up} alt="Sign_up"/><p>S'INSCRIRE</p></Link></li>
                        </ul>
                    </li>
                </ul>
            </nav> */}

            <nav className="navbar light-mode" role="navigation">
                <ul className="navbar__links">
                    <li className="navbar__link"><Link to={'/'}><FontAwesomeIcon icon={faHouse} className="white__icon" size="5x"/><p>Accueil</p></Link></li>
                    <li className="navbar__link"><Link to={'/'}><FontAwesomeIcon size="5x" icon={faHeart} className="black__icon"/><p>Favoris</p></Link></li>
                    <li className="navbar__link"><Link to={'/'}><img src={Recommandation} alt="Recommandation"/><p>Recommandations</p></Link></li>
                    <li className="navbar__link"><Link to={'/'}><FontAwesomeIcon size="5x" icon={faComments} className="black__icon"/><p>Chat</p></Link></li>
                    <li className="navbar__link"><Link to={'/'}><FontAwesomeIcon size="5x" icon={faUser} className="white__icon"/><p>Connexion</p></Link ></li>
                    <li className="navbar__link"><Link to={'/'}><FontAwesomeIcon size="5x" icon={faUserPlus} className="black__icon"/><p>Inscription</p></Link></li>
                </ul>
                <button className="burger">
                    <span className="bar"><FontAwesomeIcon icon={faBurger} size="3x"/></span>
                </button>
            </nav>

        </div>
    )
}