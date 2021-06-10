import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMovies, deleteMovie } from '../actions/index'
import MovieDisplay from './MovieDisplay'
import '../stylesheets/moviecontainer.css'
import '../stylesheets/reel.css'



export class Favorites extends Component {


    componentDidMount() {
        this.props.fetchMovies()
    }

    handleDelete = (movie) => {
        this.props.deleteMovie(movie.id)
    }



    render() {
        if (this.props.movies.length !== 0) {
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
            return <h1 className="headerP">Add a movie from Search to get started!</h1>
        }

    }
}



const mapStateToProps = (state) => {

    return { movies: state.movies }

}


export default connect(mapStateToProps, { fetchMovies, deleteMovie })(Favorites)

