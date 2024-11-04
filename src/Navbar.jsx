import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <h2>Gout et vote</h2>
        </Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/menucompleto">Menú completo</Link></li>
        <li><Link to="/guardado">Guardado</Link></li>
        <li><Link to="/megusta">Me gusta</Link></li>
        <li><Link to="/registro/iniciodesesión">Registro/Inicio de sesión</Link></li>
        <li><Link to="/perfil">Perfil</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;