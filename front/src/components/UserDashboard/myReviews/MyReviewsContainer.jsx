import MyReview from './MyReview';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getReviewsByUser } from '../../../redux/action';

const MyReviewsContainer = () => {
    const userReviews = useSelector((state) => state.userReviews);
    //const userId = useSelector((state) => state.user.id);
    //user hardcodeado para trabajar
    const userId = 1;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getReviewsByUser(userId))
    }, [userId]);

    return (
        <div>
            {!userReviews.length  ? (
                <div>
                <h6>Aún no dejaste una reseña...</h6>
                <h5>Elegi un libro y deja una!</h5>
                </div>
            ) : (
            userReviews.map((r) => {
                <MyReview
                id={r.id}
                book={r.book}
                title={r.title}
                qualification={r.qualification}
                comment={r.comment}
                key={r.id}
                />
            })
            )
        }
        </div>
    )
};

export default MyReviewsContainer