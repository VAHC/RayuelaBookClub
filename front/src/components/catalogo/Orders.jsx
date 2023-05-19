import React from 'react';
import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {sortByPrice, sortByRating} from '../../redux/action'

export const Orders = () => {
  const dispatch = useDispatch();
  const[priceValue, setPriceValue] = useState('');
  const[ratingValue, setRatingValue] = useState('');

  const handlerSortByPrice = (e) => {
    dispatch(sortByPrice(e.target.value))
    setPriceValue('')
  }

  const handlerSortByRating = (e) => {
    dispatch(sortByRating(e.target.value))
    setRatingValue('')
  }
  
  return (
    <div>
      {/* <h3>Ordena tus libros por</h3> */}
      <div>
        <label htmlFor='priceOrder'>Precio:</label>
        <select name='priceOrder' value={priceValue} onChange={handlerSortByPrice}>
          <option value="" readOnly hidden>Elije una opcion...</option>
          <option value="Asc">Menor precio</option>
          <option value="Desc">Mayor precio</option>
        </select>
      </div>
      <div>
        <label htmlFor='ratingOrder'>Calificación:</label>
        <select name='ratingOrder' value={ratingValue} onChange={handlerSortByRating}>
          <option value="" readOnly hidden>Elije una opcion...</option>
          <option value="Asc">Peor Calificado</option>
          <option value="Desc">Mejor Calificado</option>
        </select>
      </div>
    </div>
  )
}
