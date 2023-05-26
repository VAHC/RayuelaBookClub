import React from 'react';
import {useSelector} from 'react-redux';
//import Review from './Review';
//import { AiFillStar } from 'react-icons/ai';
import {useNavigate} from 'react-router-dom';

// const ContainerReviews = ({toggleModal}) => {
  const ContainerReviews = () => {
    const reviewsBook = useSelector(state => state.reviewsBook);
    const navigate = useNavigate();

    return (
      <div>
{/* Codigo para Modal
<div className="modal" tabIndex="-1">
  <div className="modal-dialog modal-dialog-scrollable">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Reseñas</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <div> */}
        {/* hardcodedo */}
        <div>
            <h3>titulo reseña 1</h3>
            {/* {Array(5).fill().map((_, index) => <AiFillStar/>)} */}
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Duis a arcu convallis, gravida purus eget, mollis diam</p>
            <h4>nombre usuario1</h4>
        </div>
        <div>
            <h3>titulo reseña 2</h3>
            {/* {Array(5).fill().map((_, index) => <AiFillStar/>)} */}
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Duis a arcu convallis, gravida purus eget, mollis diam</p>
            <h4>nombre usuario2</h4>
        </div>
        <div>
            <h3>titulo reseña 3</h3>
            {/* {Array(5).fill().map((_, index) => <AiFillStar/>)} */}
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Duis a arcu convallis, gravida purus eget, mollis diam</p>
            <h4>nombre usuario3</h4>
        </div>
            {/* {!reviewsBook.length ? 
            <div>
            <h6>Aún no hay reseñas...</h6>
            <h5>Sé el primero en dejar una!</h5>
            </div> 
            : reviewsBook.map(review => {
                <Review 
                    id = {review.id}
                    key = {review.id}
                    title = {review.title}
                    qualification = {review.qualification}
                    comment = {review.comment}
                    user = {review.user}
                />
            })
            } */}
            <button onClick={() => navigate('/crearReseña')}>Deja tu reseña</button>
        </div>
        
//       </div>
//       <div className="modal-footer">
//         <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={toggleModal}>Cerrar</button>
//         <button type="button" className="btn btn-primary">Deja tu Comentario</button>
//       </div>
//     </div>
//   </div>
// </div>
    )

};

export default ContainerReviews



