import '.../assets/Layout/header.scss';

export function Header () {
    return (
        <div className='App-header'>

            <img className='logo' src="logo_hdmf.png" alt="Logo HeyDutMurphylm" height={60}/>
            <h1>HeyDit<span>Murphy</span>lm</h1>
            <nav>
                <ul>
                    <li>Accueil</li>
                    <li>Favoris</li>
                    <li><a href=''><img src='recommandation.png' height={40}/></a></li>
                    <li>Chat</li>
                    <li>Se connecter</li>
                    <li>S'inscrire</li>
                </ul>
            </nav>
        </div>
    )
}