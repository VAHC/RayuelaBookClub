<<<<<<< HEAD
//Librerias
import {Route, Routes} from "react-router-dom";
=======
//import './App.css'

// Librerias
import { Route, Routes } from 'react-router-dom'
>>>>>>> e6856bccc1b33c5e86e62956fb1fb615d5e54a45

//Componentes
import { Home } from "./components/home/Home";
import { Nav } from "./components/nav/Nav";
import { Catalogo } from './components/catalogo/catalogo';
import 'bootstrap/dist/css/bootstrap.min.css';

import BookList from './components/home/BookList'

import { Suscripcion } from './components/suscripcion/Suscripcion';
import { Footer } from "./components/footer/Footer";



function App() {
  return (
    <>
      <Nav/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/catalogo" element={<Catalogo/>}/>

        <Route exact path="/books" element={<BookList />}/>

        <Route exact path="/suscripcion" element={<Suscripcion/>}/>

      </Routes>
      <Footer/>
    </>
  )
}

export default App
