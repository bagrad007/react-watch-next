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





    render() {
        return (
            <div className="moviecontainer">
                {
                    this.props.movies.map(movie => {
                        return (
                            <>
                                <MovieDisplay props={movie} />


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

