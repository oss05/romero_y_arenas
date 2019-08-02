import React from 'react';
import '../../css/main.css'
import logoSOMA from '../../img/logoSOMA.png'
import Contenido2 from '../Contenido2/Contenido2'

const Footer = props => {
    return (

        <footer className="footer">
            <div className="seccion1">
                <p>Romero &amp; Arenas, S.C.</p>
                <p>Tel:+52 (55) 5280 3119</p>
                <p>+52 (55) 5280 3122</p>
                <p>Galileo No.55-2º piso Col. Polanco 11560 México D.F.</p>
                <hr className="hrFooter" />
                <a className="at-user__title contactoUser" href="mailto:nsarmiento@rasc.mx">nsarmiento@rasc.mx</a>
            </div>
            <div className="seccion2">
                <p>Todos los derechos reservados</p>
                <a href="./AVISO DE PRIVACIDAD.pdf" target="_blank" className="avisoPrivacidad">Aviso de Privacidad</a>
                <div className="logo_soma">
                    <p className="designed">Designed By</p>
                    <img className="imgLogoSoma" src={logoSOMA} alt="logoSOMA" />
                </div>
            </div>
        </footer>

    )
}

export default Footer;