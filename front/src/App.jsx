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
import ContainerReviews from './components/reviews/ContainerReviews';
import FormCreateReview from './components/reviews/FormCreateReview';
import MyReviews from './components/reviews/myReviews/MyReviews';
import FormEditReviews from './components/reviews/myReviews/FormEditReviews'

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
        <Route exact path="/reviews" element={<ContainerReviews/>}/>
        <Route exact path="/createReviews" element={<FormCreateReview/>}/>
        <Route exact path="/myReviews" element={<MyReviews/>}/>
        <Route exact path="/editReviews" element={<FormEditReviews/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
