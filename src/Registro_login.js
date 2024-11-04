import React from 'react';
import { useNavigate } from 'react-router-dom';

const Registro_login = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleRegisterClick = () => {
    navigate('/registro');
  };

  return (
    <div>
      <h1>Esta es la página de registro o inicio de sesión</h1>
      <button onClick={handleLoginClick}>Iniciar sesión</button>
      <button onClick={handleRegisterClick}>Registrarme</button>
    </div>
  );
};

export default Registro_login;