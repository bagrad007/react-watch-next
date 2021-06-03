import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMovies } from '../actions/index'
// import MovieDisplay from './MovieDisplay'
import Button from 'react-bootstrap/Button'

export class Favorites extends Component {

    componentDidMount() {
        this.props.fetchMovies()
    }

    handleDelete(movie) {

    }

    render() {
        return (
            <div>
                {this.props.movies.map(movie => {
                    return (
                        <>
                            <br />
                            <img src={`${movie.img}`} />
                            <h2> {movie.name} </h2>
                            <p>{movie.year}</p>
                            <Button onClick={(e) => this.handleDelete(movie)} />
                        </>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return { movies: state.movies }

}


export default connect(mapStateToProps, { fetchMovies })(Favorites)

