import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'

import Menu from './components/basic/Menu'
import Banner from './components/basic/Banner'
import Projeto from './components/basic/Projeto'
import Footer from './components/basic/Footer'

import proj from './projetos'

const projetos = proj();

ReactDOM.render(
    <Menu />,
    document.querySelector("#menu")
)
ReactDOM.render(
    <Banner />,
    document.querySelector("#banner")
)
ReactDOM.render(
    <div>
        <div className="lista-projetos">            
        <Projeto
                titulo={projetos[0].titulo}
                texto={projetos[0].texto}
                imagem={projetos[0].imagem}
                link={projetos[0].link}
            />                                
            <Projeto
                titulo={projetos[1].titulo}
                texto={projetos[1].texto}
                imagem={projetos[1].imagem}
                link={projetos[1].link}
            />  
            <Projeto
                titulo={projetos[2].titulo}
                texto={projetos[2].texto}
                imagem={projetos[2].imagem}
                link={projetos[2].link}
            />  
                        <Projeto
                titulo={projetos[0].titulo}
                texto={projetos[0].texto}
                imagem={projetos[0].imagem}
                link={projetos[0].link}
            />                                
            <Projeto
                titulo={projetos[1].titulo}
                texto={projetos[1].texto}
                imagem={projetos[1].imagem}
                link={projetos[1].link}
            />  
            <Projeto
                titulo={projetos[2].titulo}
                texto={projetos[2].texto}
                imagem={projetos[2].imagem}
                link={projetos[2].link}
            />  
                        <Projeto
                titulo={projetos[0].titulo}
                texto={projetos[0].texto}
                imagem={projetos[0].imagem}
                link={projetos[0].link}
            />                                
            <Projeto
                titulo={projetos[1].titulo}
                texto={projetos[1].texto}
                imagem={projetos[1].imagem}
                link={projetos[1].link}
            />  
            <Projeto
                titulo={projetos[2].titulo}
                texto={projetos[2].texto}
                imagem={projetos[2].imagem}
                link={projetos[2].link}
            />  
        </div>
        <Footer title="Nathan Bahia" text="Obrigado por visitar!"/>
    </div>,
    document.querySelector("#root")
)