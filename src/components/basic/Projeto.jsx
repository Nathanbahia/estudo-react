import './Projeto.css'
import React from 'react'


export default function (props) {

    /* Definição do tamanho máximo da descrição do projeto */
    const max_len_desc = 120;
    let desc = props.texto;
    if (desc.length > max_len_desc) {
        desc = `${desc.slice(0, max_len_desc)}...`;
    }

    /* Verificação dos links para GitHub e Site dos projetos*/
    const github =  props.github !== "" ? 
        <div className="github">
            <a href={props.github} target="_blank">
                <img src="https://github.com/Nathanbahia/estudo-react/blob/master/src/imagens/github.png?raw=true" />
            </a>
        </div> : ""
    
    const site = props.link !== "" ?
        <div className="site">
            <a href={props.link} target="_blank">
                <img src="https://github.com/Nathanbahia/estudo-react/blob/master/src/imagens/internet.png?raw=true" />
            </a>
        </div> : "Projeto Privado"

    return (
        <div className="projeto">
            <div className="titulo-projeto">
                <h5>{props.titulo}</h5>
            </div>

            <div className="imagem-projeto">
                <img src={props.imagem} className="" />
            </div>

            <div className="desc-projeto">
                <p className="">{desc}</p>
            </div>

            <div className="footer-projeto">
                { github } { site }
            </div>
        </div>
    )
}