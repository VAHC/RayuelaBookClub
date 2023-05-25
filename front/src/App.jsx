//Librerias
import {Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

//Componentes
import { Home } from "./components/home/Home";
import { Nav } from "./components/nav/Nav";
import { Catalogo } from './components/catalogo/catalogo';
import { Suscripcion } from './components/suscripcion/Suscripcion';
import { Footer } from "./components/footer/Footer";
import { AboutUs } from "./components/aboutUs/AboutUs";
import { FormCreateBook } from "./components/formCreateBook/formCreateBook";
import Dashboard from "./components/adminDashboard/Dashboard";
import { Login } from "./components/login/Login";
import { Registro } from "./components/login/Registro";;
import MyReviews from './components/reviews/myReviews/MyReviews';


function App() {
  return (
    <>
      <Nav/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/nosotros" element={<AboutUs/>}/>
        <Route exact path="/suscripcion" element={<Suscripcion/>}/>
        <Route exact path="/catalogo" element={<Catalogo/>}/>
        <Route exact path="/formulario" element={<FormCreateBook/>}/>
        <Route exact path="/dashboard" element={<Dashboard/>}/>
        <Route exact path="/ingresar" element={<Login/>}/>
        <Route exact path="/registro" element={<Registro/>}/>
        <Route exact path="/misReseñas" element={<MyReviews/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
