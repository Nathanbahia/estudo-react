import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'

import Menu from './components/basic/Menu'
import Banner from './components/basic/Banner'
import Projeto from './components/basic/Projeto'
import Footer from './components/basic/Footer'

import proj from './projetos'

const projetos = proj();
const projetoComponent = projetos.map( (projeto, i) => {
    return (
        <Projeto key= {i}
            titulo={projeto.titulo} 
            texto={projeto.texto} 
            imagem={projeto.imagem} 
            link={projeto.link}
        />
    )
})  

ReactDOM.render(
    <>
        <Menu />

        <Banner />

        <div className="lista-projetos">          
            { projetoComponent }
        </div>
        
        <Footer title="Nathan Bahia" text="Obrigado por visitar!"/>
    </>,
    document.querySelector("#root")
)