import React from "react"
import {Link} from "react-router-dom"

export default function Footer () {
    return (
        <div className="App-footer">
        <Link to={'/'}>Mentions Légales</Link><br/>
        <Link to={'/'}>Contactez-nous !</Link><br/>
        <Link to={'/'}>FAQ</Link>
        </div>
    )
}