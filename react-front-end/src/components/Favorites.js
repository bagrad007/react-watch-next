import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMovies, deleteMovie } from '../actions/index'
import MovieDisplay from './MovieDisplay'
import Button from 'react-bootstrap/Button'
import '../stylesheets/moviecontainer.css'



export class Favorites extends Component {


    componentDidMount() {
        this.props.fetchMovies()
    }

    handleDelete = (movie) => {
        this.props.deleteMovie(movie.id)
    }



    render() {
        console.log(this.props)
        if (this.props.movies !== []) {
            return (
                <div className="moviecontainer">
                    {
                        this.props.movies.map(movie => {
                            return (
                                <>
                                    <MovieDisplay movie={movie} handleDelete={this.handleDelete} />
                                </>
                            )
                        })
                    }
                </div >
            )
        } else {
            return <h1>Add a movie from Search to get started!</h1>
        }

    }
}



const mapStateToProps = (state) => {

    return { movies: state.movies }

}


export default connect(mapStateToProps, { fetchMovies, deleteMovie })(Favorites)

