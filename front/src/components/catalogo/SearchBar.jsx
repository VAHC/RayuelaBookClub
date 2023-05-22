import React from 'react';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import { searchByNameOrAuthor,changePagina } from '../../redux/action';

export const SearchBar = () => {
  const dispatch = useDispatch();
  const[input, setInput] = useState('');
  const[notFound, setNotFound] = useState(false);


  const handlerChange = (e) => {
    setInput(e.target.value)
  }

  const handlerDispatch = () => {
   event.preventDefault()
    dispatch(searchByNameOrAuthor(input))
    dispatch(changePagina(1))
  }

  return (
    <div>
      {notFound && <img src='./images/notFound.png' className="w-25 position-absolute top-50 start-50 translate-middle" alt='bad request'/>}
      <nav className="navbar navbar-light bg-dark">
        <div className="container-fluid">
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Libro o autor" aria-label="Buscar" value={input} onChange={handlerChange} />
            <button className="btn btn-light btn-outline-secondary" onClick={handlerDispatch}>Buscar</button>
          </form>
          <i className="bi bi-cart text-light fs-3 mx-5"></i>
        </div>
      </nav>
    </div>
  )
}
