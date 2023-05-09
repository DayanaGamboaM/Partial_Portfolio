import {Button} from 'react-bootstrap'

const CallToAction: React.FC = () =>{
    return (
        <section className="text-white py-5 call" >
          <div className="container text-center">
            <h2 className="mb-4">¿Quieres trabajar juntos?</h2>
            <p className="lead mb-4">
            Si necesitas mis servicios profesionales o deseas discutir ideas para un proyecto, no dudes en comunicarte conmigo.
            Estaré encantada de colaborar contigo y ayudarte en todo lo que pueda.
            </p>
            <a className='buttonCall' href="mailto:mongeg1715@gmail.com" target="_blank">Contacto</a>
            <img src="https://cdn2.iconfinder.com/data/icons/ui-glyph-circle-collection-001/400/UI_glyph_icons_circle-11-512.png" className="mb-1" alt="Logo de gmail" width="40" height="40" />
                
          </div>
        </section>
      )
}
export default CallToAction;