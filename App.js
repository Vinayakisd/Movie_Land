import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./style.css";

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=96195ea7";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
































// // import React from 'react';
// import React, { useState, useEffect } from 'react';
// import './style.css';
// import SearchIcon from './search.svg';
// import MovieCard from './MovieCard';

// // 96195ea7         - api key

// const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=96195ea7';

// // const movie1 = {
// //     "Title": "Spider-Man 3",
// //     "Year": "2007",
// //     "imdbID": "tt0413300",
// //     "Type": "movie",
// //     "Poster": "https://m.media-amazon.com/images/M/MV5BYTk3MDljOWQtNGI2My00OTEzLTlhYjQtOTQ4ODM2MzUwY2IwXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
// // }


// const App = () => {

//     const [movies, setMovies] = useState([]);//hook

//     // ?search functionality to work another hook
//     const [searchTerm, setSearchTerm] = useState(" ");//empty str bcz initialy search bar is empty
//     useEffect(() => {
//         searchmovies('batman');
//     }, []);

//     const searchmovies = async (title) => {
//         const response = await fetch(`${API_URL}&s=${title}`);
//         const data = await response.json();
//         // console.log(data);
//         // instead of movies in console.log convert to setmovies

//         setMovies(data.Search);
//     };

    
//     return (
//         <div className="app">
//             <h1>MOVIE LAND</h1>
//             <div className='search'>
//                 <input
//                     placeholder='Search here'
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}

//                 />
//                 <img
//                     src={SearchIcon}
//                     alt="search"
//                     onClick={() => searchmovies(searchTerm)}
//                 />
//             </div>
//             { movies?.length > 0
//                     ? (
//                         <div className='container'>
                        
//                         {movies.map((movie) => ( 
//                             <MovieCard movie={movie} />
//                         ))}
//                       </div>
//                     ) : (

//                         <div className='empty'>
//                             <h2>Not Found</h2>
//                         </div>
//                     )

//             }
//         </div>
//     );
// }

// export default App
