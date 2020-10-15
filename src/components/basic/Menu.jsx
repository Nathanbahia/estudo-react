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
                    <img src="https://previews.dropbox.com/p/thumb/AA_StJK4cN1IAkZXoGOZjDu-TM98mfQjA5f8yAJ9h-u-4JTpCbw-FedQ225KsR8ocRYhvIsxc1Rv4akwUQMVipLuVOpVJ8kthxUReOMtFC7czXdn709R7hHz0tMm4SnipZ_IK7xez5YR3x4FHU6zhUdrrK3BxH9HamNSi2-fqFEtTycmCIy69emQPil30IzXQXHdSPM-Cq7s_XzgQpaf2ziP60t3T4FRK3XDIcn1A7ZLE_iox3nMcHkb5HEYg8pXsu_FbQ5_7viCxIz38ts2TDxIH7TsFdEocpfcKfW0yNgHBRNTAhuM0XyIDD8ShDyoN_ramb5Z9wRCyIMZJBN93kRKKI8NUioT9kHLl1vYuFbsPA/p.png?fv_content=true&size_mode=5" className="mr-1"></img>
                    Entre em contato
                </a>
            </div>
        </nav>
    )
}