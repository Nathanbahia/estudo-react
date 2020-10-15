import './Projeto.css'
import React from 'react'


export default function (props) {

    /* Definição do tamanho máximo da descrição do projeto */
    const max_len_desc = 120;
    let desc = props.texto;
    if (desc.length > max_len_desc) {
        desc = `${desc.slice(0, max_len_desc)}...`;
    }

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

                <div className="github">
                    <img src="https://previews.dropbox.com/p/thumb/AA8kPvfDbfoorSqDpebxznsLboRwB8vt_zJ_IoPHh4RndHGKcHZlnxRMZWBJ809o0YJqqqHr8dl47GKiYZTpaTnUJ2Dc9pe1SqMHAo4Nd6aFy8kNyD9pEJa7zqgN8COaYzctsw9OBKtywdaMTVF5TWM2PuOKXelpBWfNwpWGMB38cxTGSb66JIn_Ci8Yk2WjAs0jpW6gIdgUi-cRfvFPcczIS_aFN0R5w-4lllo_NFNTSovVZ5C1IFx3ySfvY3fAkdu6jzADl_wDf4LZtQLta0zDj3L9hE7zLBDoLuJgxIs8eV4mmfCC8F5UgMJKR2C11wE28aJhy4Z4Hy8pwSPojEfO7Lx7ZbK_Y1oQvlu42MjaRw/p.png?size=1600x1200&size_mode=3" />
                </div>

                <div className="site">
                    <a href={props.link} target="_blank">
                        <img src="https://previews.dropbox.com/p/thumb/AA8wwM7FztPWaUlNliSyX4NV1q7IzWfEWylfLGpLfsuFF_d2QIE_iz06gjWKmtDKzC_xOvjUnwCIGxQ38R2KB49nJcoWuHS7l7MHOTr2nKtNW4v79720FCMtFwhJ0Y51XcQZXumXAe73F-bozYMKQDholz-O5K9tmzGGBa0cnfkSFB4q4nk-Z0q55E6O3uEAIA_8c_gSFAGRQuUA03Q5XCwQ5kgFG11v1b5-7XzY_rgHzp5C2CqxqRD31N5lbXDIxkqM90c4ZM_4ixvbr1rkdOxH1whAbZXx5t0rJfoLVhnPtz-ZBE2rUOdOd2ey4KUlvRKGWw_bn6QAL2lRjhTyPGpvOxIZ9wMXwmHvDbXrHYi-Fg/p.png?fv_content=true&size_mode=5" />
                    </a>
                </div>

            </div>

        </div>
    )
}