import React from 'react';

const MovieList = ({movies}) => {

    const movieList = movies.map(movie => {
        return (<li className="list-group-item" key={movie.id}>{movie.name}</li>);
    })

    return (
        <ul className="list-group">
            {movieList}
        </ul>
    );

}

export { MovieList };
