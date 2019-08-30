import React from 'react'
import Contenido2 from '../components/Contenido2/Contenido2';
import '../css/contacto.css'

const Contacto = props => {
    return (
        <div>
            <header>
            <div className="contenedorSeccion">
                <p className="tituloSeccion">
                    <Contenido2 data={props.data}
                        parrafoUno={props.data.secciones.contacto.nombre}
                    />
                </p>
            </div>
            </header>
        <section className="mapa">
            <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d940.6444416554774!2d-99.19327447083137!3d19.43064116390252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d202002b2e755f%3A0xf3e07450d08581a2!2sGalileo+55%2C+Polanco%2C+Polanco+IV+Secc%2C+11550+Ciudad+de+M%C3%A9xico%2C+CDMX!5e0!3m2!1ses!2smx!4v1553789434388" width="100%" height={400} frameBorder={0} style={{ border: 0 }} allowFullScreen>
            </iframe>
        </section>
        </div >
    )
}

export default Contacto;
