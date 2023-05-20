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
      <h6>Ordena por</h6>
      <div className='input-group mb-3'>
        <div>
          {/* <label htmlFor='priceOrder'>Precio:</label> */}
          <select className='form-select' name='priceOrder' value={priceValue} onChange={handlerSortByPrice}>
            {/* <option value="" readOnly hidden>Elije una opcion...</option> */}
            <option value="" readOnly hidden>Precio...</option>
            <option value="Asc">Menor precio</option>
            <option value="Desc">Mayor precio</option>
          </select>
        </div>
        <div>
          {/* <label htmlFor='ratingOrder'>Valoracion:</label> */}
          <select className='form-select' name='ratingOrder' value={ratingValue} onChange={handlerSortByRating}>
            {/* <option value="" readOnly hidden>Elije una opcion...</option> */}
            <option value="" readOnly hidden>Valoracion...</option>
            <option value="Asc">Peor Valorado</option>
            <option value="Desc">Mejor Valorado</option>
          </select>
        </div>
      </div>
    </div>
  )
}
