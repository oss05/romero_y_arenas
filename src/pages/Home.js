import React from 'react';
import '../css/main.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import imgAreas from "../img/areas-de-servisio.png"
import logoRya from "../img/Logo_RYA.png"
import Contenido from '../components/Contenido/Contenido';

const Footer = props => {
    return (
        <div>
            <header>
                <div className="contenedorSeccion">
                    <p className="tituloSeccion hero"><img src={logoRya} /> </p>
                </div>
            </header>
            <main>

                <div className="areas_de_servicio">
                    <div className="titulo_areas_servicio">
                        <img className="titulo_areas_servicio" src={imgAreas} alt />
                        <p>Áreas de Servicio</p>
                    </div>
                </div>
                <section className="areas_de_servicio_contenido ">
                    <div className="aServicioFoto" />
                    <div className="decorationWhiteRects">
                        <div className="whiteDecorationRect">
                            <div className="whiteDecorationRectIn" />
                            <Link to="./pages/areasServicio.html#laboral">
                                <Contenido data={props.data}
                                    parrafoOnce={props.data.secciones.areas.Laboral.name}
                                />
                            </Link>
                        </div>
                        <div className="whiteDecorationRect">
                            <div className="whiteDecorationRectIn" />
                            <Link to="./pages/areasServicio.html#corporativo">
                                <p>Corporativo</p>
                            </Link>
                        </div>
                        <div className="whiteDecorationRect">
                            <div className="whiteDecorationRectIn" />
                            <Link to="./pages/areasServicio.html#contratos">
                                <p>Contratos</p>
                            </Link>
                        </div>
                        <div className="whiteDecorationRect">
                            <div className="whiteDecorationRectIn" />
                            <Link to="./pages/areasServicio.html#competencia">
                                <p>Competencia Económica</p>
                            </Link>
                        </div>
                        <div className="whiteDecorationRect">
                            <div className="whiteDecorationRectIn" />
                            <Link to="./pages/areasServicio.html#propiedad">
                                <p>Propiedad Industrial e Intelectual</p>
                            </Link>
                        </div>
                        <div className="whiteDecorationRect">
                            <div className="whiteDecorationRectIn" />
                            <Link to="./pages/areasServicio.html#cumplimientoNormativo">
                                <p>Cumplimiento Normativo y Gobierno Corporativo</p>
                            </Link>
                        </div>
                        <div className="whiteDecorationRect">
                            <div className="whiteDecorationRectIn" />
                            <Link to="./pages/areasServicio.html#mercantil">
                                <p> Litigio Mercantil, Civil y Penal</p>
                            </Link>
                        </div>
                        <div className="whiteDecorationRect">
                            <div className="whiteDecorationRectIn" />
                            <Link to="./pages/areasServicio.html#proteccion">
                                <p> Protección y Defensa De Los Usuarios De Servicios Financieros</p>
                            </Link>
                        </div>
                    </div>
                </section>
                {/* ------Boletines y Mapa----------- */}
                <Link to="/boletines">
                    <div className="seccion_boletines" />
                </Link>
                <section className="mapa">
                    <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d940.6444416554774!2d-99.19327447083137!3d19.43064116390252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d202002b2e755f%3A0xf3e07450d08581a2!2sGalileo+55%2C+Polanco%2C+Polanco+IV+Secc%2C+11550+Ciudad+de+M%C3%A9xico%2C+CDMX!5e0!3m2!1ses!2smx!4v1553789434388" width="100%" height={400} frameBorder={0} style={{ border: 0 }} allowFullScreen>
                    </iframe>
                </section>
            </main>
        </div>
    )
}

export default Footer;