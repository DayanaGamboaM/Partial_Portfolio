import React from 'react'
import { Button } from 'react-bootstrap';
import Image from 'next/image'
import myImage from '../images/perfil.jpeg'

const Presentation: React.FC = () => {
    return (
        <section className="bg-light" id="presentation">
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="mb-3">Sobre mí</h2>
                        <p className="lead">
                            Soy una desarrolladora web dedicada a crear soluciones digitales únicas y efectivas para empresas y organizaciones.
                        </p>
                        <p>
                            Construyo sitios web atractivos y fáciles de usar que brindan una experiencia de usuario excepcional.
                            Además, me esfuerzo por mantenerme actualizada con las últimas tendencias y
                            tecnologías del sector para asegurar que mis proyectos sean innovadores y relevantes.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <Image src={myImage} alt="Mi imagen" className="img-fluid rounded-circle"  />
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-12 d-inline-flex">
                        <a className='buttonLinke mr-3' href="https://www.linkedin.com/in/dayana-monge-637225273/" target="_blank">
                            Ver mi perfil en LinkedIn
                        </a>
                        <img className='icono' src="https://th.bing.com/th/id/R.94393125069eb17ba4eaf8b55133b7d8?rik=KWNB1tSoMlA0Ag&pid=ImgRaw&r=0" alt="Logo de LinkedIn" width="45" height="45" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Presentation  