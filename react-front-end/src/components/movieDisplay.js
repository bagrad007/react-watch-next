import React from 'react'

const movieDisplay = (movie) => {
    return (
        <div>
            <br />
            <img src={`${movie.props.Poster}`} />
            <h2> {movie.props.Title} </h2>
            <p>{movie.props.Year}</p>
        </div>
    )
}

export default movieDisplay
