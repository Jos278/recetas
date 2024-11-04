import './App.css';
import Navbar from './Navbar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Homepage from './Homepage';
import Menucompleto from './Menucompleto';
import Guardado from './Guardado';
import Megusta from './Megusta';
import Registrologin from './Registro_login';
import Perfil from './Perfil';
import Login from './Login';
import Registro from './Registro';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />      
      <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/menucompleto" element={<Menucompleto/>} />
          <Route path="/guardado" element={<Guardado />} />
          <Route path="/megusta" element={<Megusta />} /> 
          <Route path="/registro/iniciodesesión" element={<Registrologin />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
              
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
