import React from 'react'
import './Footer.css'


export default function (props) {
    return (
        <div className="w-100 footer text-light">
            <div className="row m-0 p-0">
                <div className="col-12 col-md-3 p-0 pt-4">
                    <div className="LI-profile-badge"  data-version="v1" data-size="large" data-locale="pt_BR" data-type="horizontal" data-theme="dark" data-vanity="nathanbahia">
                        <a className="LI-simple-link" href='https://br.linkedin.com/in/nathanbahia?trk=profile-badge'>Nathan Bahia</a>
                    </div>
                </div>
                <div className="col-12 col-md-9">                    
                    <ul className="mt-5">
                        <li className="contato">
                            <img src="https://github.com/Nathanbahia/estudo-react/blob/master/src/imagens/github.png?raw=true" />
                            <a href="https://github.com/nathanbahia" target="_blank" className="link-contato">GitHub</a>
                        </li>
                        <li className="contato">
                            <img src="https://github.com/Nathanbahia/estudo-react/blob/master/src/imagens/linkedin.png?raw=true" />
                            <a href="https://linkedin.com/in/nathanbahia" target="_blank" className="link-contato">LinkedIn</a>
                        </li>
                        <li className="contato">
                            <img src="https://github.com/Nathanbahia/estudo-react/blob/master/src/imagens/gmail.png?raw=true" />
                            <a href="mailto:nathanbabahia@gmail.com" target="_blank" className="link-contato">E-mail</a>
                        </li>
                        <li className="contato">
                            <img src="https://github.com/Nathanbahia/estudo-react/blob/master/src/imagens/whatsapp.png?raw=true" />
                            <a href="https://api.whatsapp.com/send?phone=5524999757229" target="_blank" className="link-contato">Whatsapp</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}