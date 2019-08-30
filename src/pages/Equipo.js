import React from 'react'
import Contenido2 from '../components/Contenido2/Contenido2'
import '../css/equipo.css'

const Equipo = props => {
    return (
        <div>
            <header>
                <div class="contenedorSeccion">
                    <p class="tituloSeccion">
                        <Contenido2 data={props.data}
                            parrafoUno={props.data.secciones.equipo.nombre}
                        />
                    </p>
                </div>
            </header>
            <main>
                <section class="equipo">
                    <div class="decorationWhiteRects">
                        <div class="whiteDecorationRect">
                            <div class="whiteDecorationRectIn"></div>
                            <p>Raul Romero Trejo</p>
                        </div>
                        <div class="decorationRect">
                            <a class="at-user__title" href="mailto:rromero@rasc.mx">rromero@rasc.mx</a>
                        </div>
                        <div class="whiteDecorationRect">
                            <div class="whiteDecorationRectIn"></div>
                            <p>Liliana Arenas Muñoz</p>
                        </div>
                        <div class="decorationRect">
                            <a class="at-user__title" href="mailto:alarenas@rasc.mx">larenas@rasc.mx</a>
                        </div>
                        <div class="whiteDecorationRect">
                            <div class="whiteDecorationRectIn"></div>
                            <p>Armando Gutiérrez del Río</p>
                        </div>
                        <div class="decorationRect">
                            <a class="at-user__title" href="mailto:agutierrez@rasc.mx">agutierrez@rasc.mx</a>
                        </div>
                        <div class="whiteDecorationRect">
                            <div class="whiteDecorationRectIn"></div>
                            <p>Arturo Corona Urióstegui</p>
                        </div>
                        <div class="decorationRect">
                            <a class="at-user__title" href="mailto:acorona@rasc.mx">acorona@rasc.mx</a>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Equipo;