//import './App.css'

//Librerias
import {Route, Routes} from "react-router-dom";

//Componentes
import {Home} from "./components/home/Home"
import { Catalogo } from './components/catalogo/catalogo';
import BookList from './components/home/BookList'

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/catalogo" element={<Catalogo/>}/>
        <Route exact path="/books" element={<BookList />}/>
      </Routes>
    </>
  )
}

export default App
