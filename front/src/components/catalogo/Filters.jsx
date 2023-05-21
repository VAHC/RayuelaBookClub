import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { GenderFiltered, getAllBooks } from '../../redux/action'

export function Filters({setCurrentPage, generos, setOrder}) {

  const dispatch = useDispatch()
  const booksPage = useSelector((state) => state.booksPage);
  const extractedArray = booksPage.flatMap(obj => obj.gender);
  console.log(extractedArray, "my array")

  useEffect(()=>{
    dispatch(getAllBooks())
  }, [])

  const typesF = (e) => {
    e.preventDefault()
    dispatch(GenderFiltered(e.target.value))
    setCurrentPage(1)
   
    setOrder(e.target.value)
  }

  return (
    <div >
      <div>
        
        <select defaultValue= 'Filter by Genre' onChange={e => typesF(e)}>
            <option disabled >Filter by Genre</option>
            {generos?.map((t) => 
            <option key={t} value={t}>
              {t}
            </option>
            )}
        </select>
      </div>
    </div>
  )
}

