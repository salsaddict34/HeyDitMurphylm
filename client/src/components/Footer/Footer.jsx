import React from "react"
import {Link} from "react-router-dom"
// Import of pictures
import Facebook from "../../assets/img/facebook.png"
import Instagram from "../../assets/img/instagram.png"
import LinkedIn from "../../assets/img/linkedin.png"

export default function Footer () {
    return (
        <div className="App-footer">
            <div>
                <Link to={'/'} className='footer--link'>Mentions Légales</Link><br/>
                <Link to={'/'} className='footer--link'>Contactez-nous !</Link><br/>
                <Link to={'/'} className='footer--link'>FAQ</Link>
            </div>
            <div>
                <Link to={'/'}><img src={Facebook} alt="Facebook" height={30}/></Link>
                <Link to={'/'}><img src={Instagram} alt="Instagram" height={30}/></Link>
                <Link to={'/'}><img src={LinkedIn} alt="LinkedIn" height={30}/></Link>
            </div>
        </div>
    )
}