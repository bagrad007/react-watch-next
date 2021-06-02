import React, { Component } from 'react'
import { connect } from 'react-redux'
import fetchMovies from '../actions/index'

export class Favorites extends Component {

    componentDidMount() {
        this.props.fetchMovies()
    }

    render() {
        return (
            <div>
                {this.props.movies.map(movie => <li>{movie.name}</li>)}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { movies: state.movies }

}


export default connect(mapStateToProps, { fetchMovies })(Favorites)

