import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Review from './Review';
import {useNavigate, useParams} from 'react-router-dom';
import { useEffect } from 'react';
import {getReviewsBook} from '../../redux/action';


// const ContainerReviews = ({toggleModal}) => {
  const ContainerReviews = () => {
    // const book = useSelector(state => state.reviewsBook);
    // const reviewsBook = book.reviews

    const reviewsBook = useSelector(state => state.reviewsBook);
    console.log(reviewsBook);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const {bookId} = useParams();

    // useEffect(() => {
    //   dispatch(getReviewsBook(bookId))
    // }, [bookId]);

    useEffect(() => {
      dispatch(getReviewsBook())
    }, []);

    return (
      <div>
        {!reviewsBook.length ? 
          <div>
            <h6>Aún no hay reseñas...</h6>
            <h5>Sé el primero en dejar una!</h5>
          </div> :
         reviewsBook.map((r) => ( 
            <Review
              id={r.id}
              title={r.title}
              qualification={r.qualification}
              comment={r.comment}
              user={r.user}
              key={r.id}
            />
          ))}
        <button onClick={() => navigate('/crearReseña')}>Deja tu reseña</button>
      </div>
    )  
};

export default ContainerReviews




// return (
//   <div>
// {/* Codigo para Modal
// <div className="modal" tabIndex="-1">
// <div className="modal-dialog modal-dialog-scrollable">
// <div className="modal-content">
//   <div className="modal-header">
//     <h5 className="modal-title">Reseñas</h5>
//     <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//   </div>
//   <div className="modal-body">
//   <div> */}
// {!reviewsBook.length ? 
//   <div>
//     <h6>Aún no hay reseñas...</h6>
//     <h5>Sé el primero en dejar una!</h5>
//   </div> :
//  reviewsBook.map((r) => ( 
//     <Review
//       id={r.id}
//       title={r.title}
//       qualification={r.qualification}
//       comment={r.comment}
//       user={r.user}
//       key={r.id}
//     />
//   ))}
        
//         <button onClick={() => navigate('/crearReseña')}>Deja tu reseña</button>
//     </div>
    
// //       </div>
// //       <div className="modal-footer">
// //         <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={toggleModal}>Cerrar</button>
// //         <button type="button" className="btn btn-primary">Deja tu Comentario</button>
// //       </div>
// //     </div>
// //   </div>
// // </div>
// )