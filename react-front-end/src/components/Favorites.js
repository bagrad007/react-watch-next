import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMovies, deleteMovie } from '../actions/index'
import MovieDisplay from './MovieDisplay'
import Button from 'react-bootstrap/Button'



export class Favorites extends Component {

    componentDidMount() {
        this.props.fetchMovies()
    }

    handleDelete(movie) {
        this.props.deleteMovie(movie.id)
    }

    handleChange = (e) => {

        this.setState({ date: e.target.value })
    }

    render() {
        return (
            <div>
                {
                    this.props.movies.map(movie => {
                        return (
                            <>
                                <MovieDisplay props={movie} />
                                <Button className="btn btn-danger" onClick={(e) => this.handleDelete(movie)}>Delete</Button>
                            </>
                        )
                    })
                }
            </div >
        )
    }
}



const mapStateToProps = (state) => {

    return { movies: state.movies }

}


export default connect(mapStateToProps, { fetchMovies, deleteMovie })(Favorites)

