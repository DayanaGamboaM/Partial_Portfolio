import {Button} from 'react-bootstrap'
const CallToAction: React.FC = () =>{
    return (
        <section className="bg-primary text-white py-5">
          <div className="container text-center">
            <h2 className="mb-4">¿Quieres trabajar juntos?</h2>
            <p className="lead mb-4">
            Si necesitas mis servicios profesionales o deseas discutir ideas para un proyecto, no dudes en comunicarte conmigo.
            Estaré encantada de colaborar contigo y ayudarte en todo lo que pueda.
            </p>
            <Button variant="primary" size="lg" href="mailto:mongeg1715@gmail.com" target="_blank">Contacto</Button>
            <img src="https://cdn-icons-png.flaticon.com/512/281/281752.png" className="me-2" alt="Logo de gmail" width="45" height="45" />
                
          </div>
        </section>
      )
}
export default CallToAction;