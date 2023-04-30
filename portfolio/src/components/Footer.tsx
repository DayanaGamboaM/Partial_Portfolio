import React from 'react'

const Footer: React.FC = () => {
  return (
    <div id="contacts">
    <footer className="bg-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center text-md-start">
            <p>© 2023 Dayana</p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <h5>Redes Sociales</h5>
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <a href="https://www.linkedin.com/in/dayana-monge-637225273/"><i className="bi bi-linkedin"></i></a>
              </li>
              <li className="list-inline-item">
                <a href="https://github.com/DayanaGamboa"><i className="bi bi-github"></i></a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.instagram.com/da_monge_/"><i className="bi bi-instagram"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer
