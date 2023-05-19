import React from 'react';
import {useState} from 'react';
import {useDispatch} from 'react-redux';

export const SearchBar = () => {
  const dispatch = useDispatch();
  const[input, setInput] = useState('');

  const handlerChange = (e) => {
    setInput(e.target.value)
  }

  const handlerDispatch = () => {
    //dispatch(action(input));
    setInput('')
  }



  return (
    <div>
      <input type='search' value={input} placeholder='Libro o Autor...' onChange={handlerChange}/>
      <button onClick={handlerDispatch}>Buscar</button>
    </div>
  )
}
