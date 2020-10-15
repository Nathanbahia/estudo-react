import React from 'react'


export default function(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <a className="navbar-brand" href="#">Nathan Bahia</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="conteudoNavbarSuportado">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Início</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Projetos</a>
                    </li>                
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contato</a>
                    </li>
                </ul>            
                <button className="btn btn-outline-primary">Entre em contato</button>
            </div>            
        </nav>
    )
}