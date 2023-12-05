import React, { createContext, useContext, useReducer, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const MovieContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_REVIEW':
      return {
        ...state,
        reviews: [...state.reviews, action.payload],
      };
    case 'DELETE_REVIEW':
      return {
        ...state,
        reviews: state.reviews.filter((review) => review.id !== action.payload),
      };
    default:
      return state;
  }
};

function Review({ movies }) {
  const { movieTitle } = useParams();
  const movie = movies.find((m) => m.title === movieTitle);

  const [state, dispatch] = useReducer(reducer, {
    reviews: [],
  });

  const [newReview, setNewReview] = useState('');

  const addReview = () => {
    const review = {
      id: Date.now(),
      content: newReview,
    };
    dispatch({ type: 'ADD_REVIEW', payload: review });
    setNewReview('');
  };

  const deleteReview = (reviewId) => {
    dispatch({ type: 'DELETE_REVIEW', payload: reviewId });
  };

  return (
    <MovieContext.Provider value={{ state, addReview, deleteReview }}>
      <div className="container lg mx-auto">
        <div class="flex flex-col w-full border-opacity-50">
          <div class="grid card p-6 bg-base-300 rounded-box place-items-center">
            <div className='grid grid-cols-2'>
              <div style={{ width: '58%' }}>

                <img style={{ float: 'right' }} className='h-80' src={movie.image} alt={movie.title} />
              </div>
              <div >
                <h1 style={{ fontSize: '4em', fontWeight: 'bold' }}>{movie.title}</h1>
                <p>{movie.largeSynopsis}</p>
              </div>

            </div>
          </div>
          <div class="divider" style={{ fontWeight: 'bold' }}>Create a Review</div>
          <div class="grid p-6 card bg-base-300  place-items-center pt-1">

            <div className='grid-rows-2 p-4' >
              {/* <h2>Create a Review</h2> */}
              <div>
                <textarea style={{ width: '47em' }}
                  value={newReview}
                  onChange={(e) => setNewReview(e.target.value)}
                  placeholder="Write your review here"
                />
              </div>
              <div className='mt-2'>
                <button className="btn btn-success" onClick={addReview}>Add Review</button>

              </div>
            </div>
          </div>

          <div class="divider" style={{ fontWeight: 'bold' }}>Reviews</div>
          <div class="grid p-6 card bg-base-300 rounded-box place-items-center">


            {state.reviews.map((review) => (
              <div key={review.id} className='bg-[#2b2a33] mb-4 p-4 rounded-box' >
                <div style={{ width: '47em' }}>
                  <p>{review.content}</p>

                  <button className="btn btn-warning mt-5 mb-2" style={{ float: 'right' }} onClick={() => deleteReview(review.id)}>Delete Review</button>
                </div>

              </div>


            ))}
          </div>
        </div>





        <Link to="/">Back to Home</Link>
      </div>

    </MovieContext.Provider>
  );
};

export default Review;
