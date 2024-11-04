import React from 'react';

const countries = ['México','Estados Unidos','Canadá','Argentina','Brasil','Chile','España','Francia','Alemania','Japón'];

const anios = ['1','2','3','4 o más']

const Registro = () => {
  return (
    <div>
      <h1>Esta es la página de registro</h1>
      <div>
        <label>Nombre Completo</label>
        <input type="text"></input>
      </div>
      <div>
        <label>Usuario </label>
        <input type="text"></input>
      </div>
      <div>
        <label>Correo Electrónico</label>
        <input type="email"></input>
      </div>
      <div>
        <label>Teléfono</label>
        <input type="text"></input>
      </div>
      
      <div>
          <label>País </label>
          <select name="country" required>
            <option value="">Seleccione un país</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>¿Cuánto tiempo llevas cocinando?</label>
          <select name="anios" required>
            <option value="">Seleccione los años aproximados</option>
            {anios.map((anios) => (
              <option key={anios} value={anios}>
                {anios}
              </option>
            ))}
          </select>
        </div>
        <div>
        <label>Contraseña </label>
        <input type="password"></input>
      </div>
      <button>Registrarme</button>
    </div>
  );
}

export default Registro;