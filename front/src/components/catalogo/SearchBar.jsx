import React from 'react';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import { searchByNameOrAuthor } from '../../redux/action';

export const SearchBar = () => {
  const dispatch = useDispatch();
  const[input, setInput] = useState('');
  const[notFound, setNotFound] = useState(false);


  const handlerChange = (e) => {
    setInput(e.target.value)
  }

  const handlerDispatch = () => {
    dispatch(searchByNameOrAuthor(input))
    .then()
    .catch(error => setNotFound(true),
    setTimeout(() => setNotFound(false), 2000))
    setInput('')
  }



  return (
    <div>
      {notFound && <img src='./images/notFound.png' alt='bad request'/>}
      <input type='search' value={input} placeholder='Libro o Autor...' onChange={handlerChange}/>
      <button className='btn btn-secondary' onClick={handlerDispatch}>Buscar</button>
    </div>
  )
}
