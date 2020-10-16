import React from 'react'


export default function (props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <a className="navbar-brand" href="#">Nathan Bahia</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu-superior" aria-controls="menu-superior" aria-expanded="false" aria-label="Alterna navegação">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="menu-superior">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" target="_blank" href="https://linkedin.com/in/nathanbahia">LinkedIn</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" target="_blank" href="https://github.com/nathanbahia">GitHub</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" target="_blank" href="https://api.whatsapp.com/send?phone=5524999757229">Whatsapp</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" target="_blank" href="mailto:nathanbabahia@gmail.com">E-mail</a>
                    </li>
                </ul>
                <a href="https://linkedin.com/in/nathanbahia" target="_blank" className="btn btn-outline-primary">
                    <img src="https://github.com/Nathanbahia/estudo-react/blob/master/src/imagens/linkedin.png?raw=true" className="mr-1"></img>
                    Entre em contato
                </a>
            </div>
        </nav>
    )
}