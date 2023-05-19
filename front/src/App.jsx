//Librerias
import {Route, Routes} from "react-router-dom";

//Componentes
import {Home} from "./components/home/Home"
import { Catalogo } from './components/catalogo/catalogo';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <Routes>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/catalogo" element={<Catalogo/>}/>
      </Routes>
    </>
  )
}

export default App
