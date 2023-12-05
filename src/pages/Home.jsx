import React from 'react';
import { Link } from 'react-router-dom';

function Home({ movies }) {
  return (
    <>
      <div>
        <div className="container mx-auto">
        <main className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {
            movies.map((movie) => (
              <div className="card w-96 bg-base-100 shadow-lg shadow-blue-500/50 ">
                <figure ><img src={movie.image} alt={movie.title}/></figure>
                <div className="card-body">
                  <h2 className="card-title" key={movie.title}>{movie.title}</h2>
                  <p>{movie.synopsis}</p>
                  <div className="card-actions justify-end">
                    <Link to={`/review/${movie.title}`}>
                      <button className="btn btn-primary">Review</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          }
        </main>
        </div>
      </div>
    </>
  );
};

export default Home;
