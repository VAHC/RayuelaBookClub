import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { GenderFiltered, getAllBooks, filterAuthor, changePagina } from '../../redux/action'

export function Filters({setCurrentPage, generos, setOrder}) {

  const dispatch = useDispatch()
  const booksPage = useSelector((state) => state.booksPage);
  const extractedArray = booksPage.flatMap(obj => obj.gender);






  const allBooks = useSelector((state) => state.allBooks)
  
  
  useEffect(()=>{
    dispatch(getAllBooks())
  }, [])

  const genresNoRepeat = allBooks
    .flatMap(book => book.gender)
    .filter((genre, index, self) => self.findIndex(g => g === genre) === index);

    const authorsNoRepeat = allBooks
    .flatMap(book => book.authors)
    .filter((aut, index, self) => self.findIndex(a => a === aut) === index);



console.log(allBooks)
var uniqueAuthors = [...new Set(allBooks.map(obj => obj.authors))]

  


  const typesF = (e) => {
   
    dispatch(GenderFiltered(e.target.value))
    dispatch(changePagina(1))
    //setCurrentPage(1)
   
    //setOrder(e.target.value)
  }

  const handleFilterAuthor = (e) => {
    
    dispatch(filterAuthor(e.target.value))
    dispatch(changePagina(1))
   // setCurrentPage(1)
    //setOrder(e.target.value)
  }

  return (
    <div >
      <div>
        

        {/* <select defaultValue= 'Filter by authors' onChange={e => filterAuthor(e)}>
            <option disabled >Filter by authors</option>
            {authorsNoRepeat && authorsNoRepeat.map((t, index) => 
            <option key={index} value={t}>
              {t}
            </option>
            )}
        </select> */}
        <h6>Filtrar por</h6>
        <div className='m-1 mb-3'>

        <select className='form-select' onChange={e => handleFilterAuthor(e)}  >
                    <option value="filter">Autor</option>
                    <option value="All">All</option>
                    {authorsNoRepeat && authorsNoRepeat.map((a,index) =>
                        <option key={index} value={a}>{a}</option>
                    )}
        </select>
        </div> 

        <div className='m-1'>            
        <select className='form-select' onChange={e => typesF(e)}  >
                    <option value="filter">Genero</option>
                    <option value="All">All</option>
                    {genresNoRepeat && genresNoRepeat.map((a,index) =>
                        <option key={index} value={a}>{a}</option>
                    )}
        </select>
          
        </div>        

      </div>
    </div>
  )
}

