import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import StarRating from './StarRating';

function Test() {
  const [movieRating, setMovieRating] = useState(0)
  return (
    <div>
      <StarRating color="purple" maxRating={10} MovieRating={setMovieRating} />
      <p>This movie is Rated {movieRating}</p>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating maxRating={5} message={["Terrible", "Bad", "Okay", "Good", "Amazing"]} />
    <StarRating maxRating={10} className="test" defaultRating={3} />
    <Test />
  </React.StrictMode>
);
