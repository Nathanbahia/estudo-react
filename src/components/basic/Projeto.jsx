import React from 'react'


export default function(props) {
    return (                  
        <div className="card my-4">
            <div className="row m-0 p-0">
                <div className="col-12 col-md-3 p-0 text-center">
                    <img src={ props.imagem } className="w-100"/>
                </div>
                <div className="col-12 col-md-9">
                    <h5 className="card-title">{ props.titulo }</h5>                    
                    <p className="card-text">{ props.texto }</p>
                    <a href={ props.link } target="_blank">Acesse</a>                                        
                </div>
            </div>               
        </div>        
    )
}