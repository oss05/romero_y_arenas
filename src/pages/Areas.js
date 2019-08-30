import React from 'react'
import Contenido from '../components/Contenido/Contenido';
import Contenido2 from '../components/Contenido2/Contenido2';
import Title from '../components/Title/Title'
import '../css/areasServicio.css'
//Imagenes
import imgLaboral from '../img/10.png'
import imgCorporativo from '../img/11.png'
import imgContratos from '../img/5.png'
import imgEconomica from '../img/3.png'
import imgIndustrial from '../img/7.png'
import imgCumplimiento from '../img/8.png'
import imgLitigio from '../img/9.png'
import imgProteccion from '../img/4.png'

const Areas = props => {
    return (
        <div>
            <header>
                <div className="contenedorSeccion">
                        <Contenido2 
                            data={props.data}
                            parrafoUno={props.data.secciones.areas.nombre}
                        />
                </div>
            </header>

            <div className="contenedorIzq" id="laboral">
                <div className="imagenServicio">
                    <img src={imgLaboral} alt="area_laboral_y_deguridad" />
                </div>
                <div className="texto">
                    <div className="plecaBlanca">
                        <div className="tituloArea">
                            <Title className="title" data={props.data}
                                title={props.data.secciones.areas.Laboral.name}
                            />
                        </div>
                    </div>
                    <div className="pLeft">
                        <Contenido data={props.data}
                            parrafoUno={props.data.secciones.areas.Laboral.p1}
                            parrafoDos={props.data.secciones.areas.Laboral.p2}
                            parrafoTres={props.data.secciones.areas.Laboral.p3}
                        />
                    </div>
                </div>
            </div>

            <div className="contenedorDer" id="corporativo">
                <div className="imagenServicio">
                    <img src={imgCorporativo} alt="area_corporativa" />
                </div>
                <div className="texto">
                    <div className="plecaBlancaDer">
                        <div className="tituloArea">
                            <Title data={props.data}
                                title={props.data.secciones.areas.Corporativo.name}
                            />
                        </div>
                    </div>
                    <div className="pRight">
                        <Contenido data={props.data}
                            parrafoUno={props.data.secciones.areas.Corporativo.p1}
                        />
                    </div>
                </div>
            </div>

            <div className="contenedorIzq" id="contratos">
                <div className="imagenServicio">
                    <img src={imgContratos} alt="contratos" />
                </div>
                <div className="texto">
                    <div className="plecaBlanca">
                        <div className="tituloArea">
                            <Title data={props.data}
                                title={props.data.secciones.areas.Contratos.name}
                            />
                        </div>
                    </div>
                    <div className="pLeft">
                        <Contenido data={props.data}
                            parrafoUno={props.data.secciones.areas.Contratos.p1}
                        />
                    </div>
                </div>
            </div>


            <div className="contenedorDer" id="competencia">
                <div className="imagenServicio">
                    <img src={imgEconomica} alt="competencia_economica" />
                </div>
                <div className="texto">
                    <div className="plecaBlancaDer">
                        <div className="tituloArea">
                            <Title data={props.data}
                                title={props.data.secciones.areas.Competencia.name}
                            />
                        </div>
                    </div>
                    <div className="pRight">
                        <Contenido data={props.data}
                            parrafoUno={props.data.secciones.areas.Competencia.p1}
                            parrafoDos={props.data.secciones.areas.Competencia.p2}
                        />
                    </div>
                </div>
            </div>


            <div className="contenedorIzq" id="propiedad">
                <div className="imagenServicio">
                    <img src={imgIndustrial} alt="propiedad_industrial_e_intelectual" />
                </div>
                <div className="texto">
                    <div className="plecaBlanca">
                        <div className="tituloArea">
                            <Title data={props.data}
                                title={props.data.secciones.areas.Propiedad.name}
                            />
                        </div>
                    </div>
                    <div className="pLeft">
                        <Contenido data={props.data}
                            parrafoUno={props.data.secciones.areas.Propiedad.p1}
                        />
                    </div>
                </div>
            </div>


            <div className="contenedorDer" id="cumplimientoNormativo">
                <div className="imagenServicio">
                    <img src={imgCumplimiento} alt="cumplimiento_normativo" />
                </div>
                <div className="texto">
                    <div className="plecaBlancaDer">
                        <div className="tituloArea">
                            <Title data={props.data}
                                title={props.data.secciones.areas.Cumplimiento.name}
                            />
                        </div>
                    </div>
                    <p className="pRight">
                        <Contenido data={props.data}
                            parrafoUno={props.data.secciones.areas.Cumplimiento.p1}
                        />
                    </p>
                </div>
            </div>


            <div className="contenedorIzq" id="mercantil">
                <div className="imagenServicio">
                    <img src={imgLitigio} alt="area_contenciosa_mercanti_y_civil" />
                </div>
                <div className="texto">
                    <div className="plecaBlanca">
                        <div className="tituloArea">
                            <Title data={props.data}
                                title={props.data.secciones.areas.Litigio.name}
                            />
                        </div>
                    </div>
                    <div className="pLeft">
                        <Contenido data={props.data}
                            parrafoUno={props.data.secciones.areas.Litigio.p1}
                            parrafoDos={props.data.secciones.areas.Litigio.p2}
                            parrafoTres={props.data.secciones.areas.Litigio.p3}
                            parrafoCuatro={props.data.secciones.areas.Litigio.p4}
                        />
                    </div>
                </div>
            </div>


            <div className="contenedorDer" id="proteccion">
                <div className="imagenServicio">
                    <img src={imgProteccion} alt="proteccion_y_defensa_de_los_usuarios" />
                </div>
                <div className="texto">
                    <div className="plecaBlancaDer">
                        <div className="tituloArea">
                            <Title data={props.data}
                                title={props.data.secciones.areas.Proteccion.name}
                            />
                        </div>
                    </div>
                    <div className="pRight">
                        <Contenido data={props.data}
                            parrafoUno={props.data.secciones.areas.Proteccion.p1}
                        />
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Areas;