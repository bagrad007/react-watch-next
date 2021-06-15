import React, { Component } from 'react';
import { connect } from 'react-redux'
import { searchMovies, addFavorite } from '../actions/index'
import Button from 'react-bootstrap/Button'
import MovieDisplay from './MovieDisplay'
import '../stylesheets/moviecontainer.css'


class searchResults extends Component {

    handleFavorite(movieObject) {
        this.props.addFavorite(movieObject)
    }

    render() {
        return (
            <div className="moviecontainer">
                {this.props.searchedMovies.map(movie => {
                    return (
                        <div>
                            <MovieDisplay movie={movie} />
                            <Button onClick={(e) => this.handleFavorite(movie)}>Add to Favorites</Button>
                        </div>
                    )
                })
                }
            </div >
        );
    }
}

const mapStateToProps = (state) => {
    return { searchedMovies: state.searchedMovies }
}

export default connect(mapStateToProps, { searchMovies, addFavorite })(searchResults)