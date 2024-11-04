import React from 'react';

const Login = () => {
  return (
    <div>
      <h1>Esta es la página de login</h1>
      <div>
        <label>Usuario </label>
        <input type="text"></input>
      </div>
      <div>
        <label>Contraseña </label>
        <input type="password"></input>
      </div>
      <button>Iniciar sesión</button>
    </div>
  );
}

export default Login;