import React from 'react';
import movies from '../data.js';

const MovieList = (props) => {

    const movieList = movies.map(movie => {
        return (<li className="list-group-item" key={movie.id}>{movie.name}</li>);
    })

    return (
        <div className='container'>
        <ul className="list-group">
            {movieList}
        </ul>
        </div>
    );

}

export { MovieList };
