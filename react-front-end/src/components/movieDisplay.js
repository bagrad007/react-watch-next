import React from 'react'
import Button from 'react-bootstrap/Button'

const movieDisplay = (props) => {
    if (props.handleDelete) {
        return (
            <div>
                <br />
                <img src={`${props.movie.Poster}`} />
                <h2> {props.movie.Title} </h2>
                <p>{props.movie.Year}</p>
                <Button className="btn btn-danger" onClick={(e) => props.handleDelete(props.movie)}>Delete</Button>
            </div>
        )
    } else {
        return (
            <div>
                <br />
                <img src={`${props.movie.Poster}`} />
                <h2> {props.movie.Title} </h2>
                <p>{props.movie.Year}</p>
            </div>
        )
    }




}

export default movieDisplay
