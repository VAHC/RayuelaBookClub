import './App.css'

//Librerias
import {Route, Routes} from "react-router-dom";

//Componentes
import {Home} from "./components/home/Home"
import { Catalogo } from './components/catalogo/catalogo';


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
