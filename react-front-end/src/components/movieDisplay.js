import React from 'react'
import Button from 'react-bootstrap/Button'

const movieDisplay = (movie) => {

    const handleDelete = (movie) => {
        this.props.deleteMovie(movie.id)
    }
    return (
        <div>
            <br />
            <img src={`${movie.props.Poster}`} />
            <h2> {movie.props.Title} </h2>
            <p>{movie.props.Year}</p>
            <Button className="btn btn-danger" onClick={(e) => handleDelete(movie)}>Delete</Button>
        </div>
    )
}

export default movieDisplay
