import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import {useState} from 'react';

function App() {
  //creamos hook
  const[servicios, agregarServicios] = useState(
    [
      {id: 1, nombre: "remera", precio: 2500},
      {id: 2, nombre: "campera", precio: 12500},
      {id: 3, nombre: "camiseta", precio: 7000},
      {id: 4, nombre: "zapatos", precio: 20000}
    ]
  ) ;


  return (
    <div>
      <Header/>
      <div className ='cuerpo'>
        <h1>Catalogo de ropa</h1>
        <div className = 'contenedor'>
          <div className="card" style={{ width: '18rem' }}>
            <img src="https://cdn.pixabay.com/photo/2016/12/10/16/57/shoes-1897708_1280.jpg" className="card-img-top"/>
            <div className="card-body">
              <h5 className="card-title">Zapatos</h5>
              <p className="card-text">Lleva confort, elegí nuestros zapatos </p>
              <a href="#" className="btn btn-primary">Comprar</a>
            </div>
          </div>
        <div className="card" style={{ width: '18rem' }}>
          <img src="https://lh3.googleusercontent.com/qNjwGu_uXvzJueL14IOOcmx2jM7s2rGCbZ-RVNVKMQUDubup0arCV6mBeULe2PQJ4GE27JY7mqdmyVPZSgw8MJWolVV7-BI3tehDGr4" className="card-img-top"/>
          <div className="card-body">
            <h5 className="card-title">Abrigo</h5>
            <p className="card-text">ultimas unidades disponibles, nada mejor que blanco para combinar en invierno </p>
            <a href="#" className="btn btn-primary">Comprar</a>
          </div>
        </div>
        <div className="card" style={{ width: '18rem' }}>
          <img src="https://lh3.googleusercontent.com/37cTB45kgWvkYOTmRlxEEjrGULHqSXBNofgY4TovtpB3XAA2E0A5V4ggtHp2vmexUShaYwzFFhjvoaGja-6IRmmeCa3xRj76MQJSgPMCMg" className="card-img-top"/>
          <div className="card-body">
            <h5 className="card-title">Camisetas</h5>
            <p className="card-text">Llevá la pasión a donde vayas ¡Barcelona! </p>
            <a href="#" className="btn btn-primary">Comprar</a>
          </div>
        </div>
      </div>
        {
          servicios.map(servicio =>(
            <p> {servicio.id} | {servicio.nombre} | {servicio.precio} </p>
          ))
        }
       </div> 
      <Footer
        redsocial = {"@facebook"}
      />
    </div>
  );
}

export default App;
