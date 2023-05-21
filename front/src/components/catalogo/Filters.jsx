import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { GenderFiltered, getAllBooks, filterAuthor, changePagina } from '../../redux/action'

export function Filters({setCurrentPage, generos, setOrder}) {

  const dispatch = useDispatch()
  const booksPage = useSelector((state) => state.booksPage)
  const allBooks = useSelector((state) => state.allBooks)

  //const extractedArray = booksPage.flatMap(obj => obj.gender)

  useEffect(()=>{
    dispatch(getAllBooks())
  }, [])

  const genresNoRepeat = allBooks
    .flatMap(book => book.gender)
    .filter((genre, index, self) => self.findIndex(g => g === genre) === index);

  const authorsNoRepeat = allBooks
    .flatMap(book => book.authors)
    .filter((aut, index, self) => self.findIndex(a => a === aut) === index);

//var uniqueAuthors = [...new Set(allBooks.map(obj => obj.authors))]

  const handleFilterGenre = (e) => {
    dispatch(GenderFiltered(e.target.value))
    dispatch(changePagina(1))
  }

  const handleFilterAuthor = (e) => {
    
    dispatch(filterAuthor(e.target.value))
    dispatch(changePagina(1))
  }

  return (
    <div >
      <h6 className='mx-2'>Filtrar por</h6>
      <div className='m-1 mb-3'>
        <select className='form-select' onChange={e => handleFilterAuthor(e)}  >
          <option value="filter">Autor</option>
          <option value="All">Todos</option>
          {authorsNoRepeat && authorsNoRepeat.map((a, index) =>
            <option key={index} value={a}>{a}</option>
          )}
        </select>
      </div>
      <div className='m-1'>
        <select className='form-select' onChange={e => handleFilterGenre(e)}  >
          <option value="filter">Género</option>
          <option value="All">Todos</option>
          {genresNoRepeat && genresNoRepeat.map((a, index) =>
            <option key={index} value={a}>{a}</option>
          )}
        </select>
      </div>
    </div>
  )
}