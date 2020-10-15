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
            <Projeto titulo={projetos[0].titulo} texto={projetos[0].texto} imagem={projetos[0].imagem} link={projetos[0].link}/>                                
            <Projeto titulo={projetos[1].titulo} texto={projetos[1].texto} imagem={projetos[1].imagem} link={projetos[1].link}/>  
            <Projeto titulo={projetos[2].titulo} texto={projetos[2].texto} imagem={projetos[2].imagem} link={projetos[2].link}/>  
            <Projeto titulo={projetos[3].titulo} texto={projetos[3].texto} imagem={projetos[3].imagem} link={projetos[3].link}/>                                
            <Projeto titulo={projetos[4].titulo} texto={projetos[4].texto} imagem={projetos[4].imagem} link={projetos[4].link}/>  
            <Projeto titulo={projetos[5].titulo} texto={projetos[5].texto} imagem={projetos[5].imagem} link={projetos[5].link}/>  
            <Projeto titulo={projetos[6].titulo} texto={projetos[6].texto} imagem={projetos[6].imagem} link={projetos[6].link}/>                                
            <Projeto titulo={projetos[7].titulo} texto={projetos[7].texto} imagem={projetos[7].imagem} link={projetos[7].link}/>  
            <Projeto titulo={projetos[8].titulo} texto={projetos[8].texto} imagem={projetos[8].imagem} link={projetos[8].link}/>  
        </div>
        <Footer title="Nathan Bahia" text="Obrigado por visitar!"/>
    </div>,
    document.querySelector("#root")
)