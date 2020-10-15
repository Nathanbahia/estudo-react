import React from 'react'


export default function(props) {
    return (                  
        <div className="w-100 bg-dark text-light">
            <div className="row m-0 p-0">
                <div className="col-12 col-md-3 p-4">
                    <img src="https://avatars3.githubusercontent.com/u/51969733?s=460&u=0286db4e7a70e17a71d840dec2121867277abc71&v=4" 
                    style={{"width":"200px", "borderRadius": "100%"}}/>
                </div>
                <div className="col-12 col-md-9 py-5">
                    <h5 className="card-title">{ props.title }</h5>                    
                    <p className="card-text">{ props.text }</p>
                    <ul>
                        <li>LinkedIn</li>
                        <li>GitHub</li>                        
                        <li>E-mail</li>
                        <li>Instagram</li>
                    </ul>
                </div>
            </div>               
        </div>        
    )
}