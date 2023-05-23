import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchByNameOrAuthor,changePagina } from '../../redux/action';
import { Link } from 'react-router-dom';

export const SearchBar = () => {
  const dispatch = useDispatch();

  const[input, setInput] = useState('');
  const[notFound, setNotFound] = useState(false);

  const booksPage = useSelector((state) => state.booksPage)

  const handlerChange = (e) => {
    setInput(e.target.value)
  }

  const handlerDispatch = () => {
    event.preventDefault()
    dispatch(searchByNameOrAuthor(input))
    if (booksPage.length === 0) {
     setNotFound(true);
     setTimeout(() => setNotFound(false), 2000);
    }
    dispatch(changePagina(1))
    setInput('')
  }

  return (
    <div>
      {notFound && <img src='./images/notFound.png' className="w-25 position-absolute start-50 top-50 translate-middle-x" alt='bad request'/>}
      <nav className="navbar navbar-light bg-dark">
        <div className="container-fluid">
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Libro o autor" aria-label="Buscar" value={input} onChange={handlerChange} />
            <button className="btn btn-light btn-outline-secondary" onClick={handlerDispatch}>Buscar</button>
          </form>
          <Link to="/formulario"><button className="btn btn-light btn-outline-secondary">Agregar libro</button></Link>
          <i className="bi bi-cart text-light fs-3 mx-5"></i>
        </div>
      </nav>
    </div>
  )
}
