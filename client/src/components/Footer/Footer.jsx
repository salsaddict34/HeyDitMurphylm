import React from "react"
import {Link} from "react-router-dom"

export default function Footer () {
    return (
        <div className="App-footer">
        <Link to={'/'} className='footer--link'>Mentions Légales</Link><br/>
        <Link to={'/'} className='footer--link'>Contactez-nous !</Link><br/>
        <Link to={'/'} className='footer--link'>FAQ</Link>
        </div>
    )
}