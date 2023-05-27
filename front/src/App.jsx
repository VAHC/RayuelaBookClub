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
import Dashboard from "./components/adminDashboard/Dashboard"
import UserDashboard from "./components/UserDashboard/UserDashboard";
import { Login } from "./components/login/Login";
import { Registro } from "./components/login/Registro";
import { FAQs } from "./components/footer/FAQs";
import MyReviews from './components/reviews/myReviews/MyReviews';
import FormCreateReview from "./components/reviews/FormCreateReview";
import FormEditReviews from "./components/reviews/myReviews/FormEditReviews"

function App() {
  return (
    <>
      <Nav/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/nosotros" element={<AboutUs/>}/>
        <Route exact path="/suscripcion" element={<Suscripcion/>}/>
        <Route exact path="/catalogo" element={<Catalogo/>}/>
        <Route exact path="/admindashboard" element={<Dashboard/>}/>
        <Route exact path="/userdashboard" element={<UserDashboard/>}/>
        <Route exact path="/ingresar" element={<Login/>}/>
        <Route exact path="/registro" element={<Registro/>}/>
        <Route exact path="/preguntas-frecuentes" element={<FAQs/>}/>
        <Route exact path="/misReseñas" element={<MyReviews/>}/>
        <Route exact path="/crearReseña" element={<FormCreateReview/>}/>
        <Route exact path="/editarReseña" element={<FormEditReviews/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App

