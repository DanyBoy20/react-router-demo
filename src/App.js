import React from 'react';
/* import { Route, Switch, NavLink } from "react-router-dom"; */
/* SWITCH EN ROUTES YA NO EXISTE DESDE VERSION 6.x DE ROUTER */
import { Route, Routes, NavLink, Link } from "react-router-dom";
import About from './About';
import Dog from './Dog';
import Contact from './Contact';  
import './App.css';

const TextRoute = () => <h1>Text Route</h1>;

function App() {
  return (
    <div className="App">      
      <nav className="App-nav">
        {/* Uso de <NavLink> para menu de navegación [NOTA: Ya no se usa activeClassName para verificar link activo] */}
        {/* Para conocer cual esta activa, paso una funcion a className como parametro isActive */}
        <NavLink 
          className={({ isActive }) => isActive ? 'active-link' : 'deactive-link'} 
          to="/"
        >
            About
        </NavLink>
        <NavLink 
          className={({ isActive }) => isActive ? 'active-link' : 'deactive-link'} 
          to="/contact"
          /* Pasamos propiedad (estado) a contact, la recibimos con useLocation|location.state (ver componente: contact) */
          state={{propiedad: "Hola mundo"}}
        >
          Contact
        </NavLink>
        <NavLink 
          className={({ isActive }) => isActive ? 'active-link' : 'deactive-link'} 
          to="/dog"
        >
          Dog
        </NavLink>        
      </nav>
      {/* <Link> se ocupa para enlaces que no esten necesariamente en un menu de navegacion (aunque si puede estar dentro de) */}
      <Link to="/text-route">Text Route</Link>
      {/* Desde V6 de Router, <Route> debe ir entre <Routes> </Routes>, ya no se usa exact, component ahora es element */}
      <Routes> 
        <Route path="/" element={<About />} /> {/* ahora se usa element (antes era component) */}
        <Route path="/contact" element={<Contact />} />
        {/* Pasando parametros: name: Willi , se recibe en componente <Dog /> con {this.props.name} */}
        <Route path="/dog" element={<Dog name='Willi' />} />
        <Route path="/text-route" element={<TextRoute />} />        
      </Routes>       
    </div>
  );
}

export default App;
