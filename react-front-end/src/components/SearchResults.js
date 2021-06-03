import React, { Component } from 'react';
import { connect } from 'react-redux'
import { searchMovies, addFavorite } from '../actions/index'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'


class searchResults extends Component {

    handleFavorite(movieObject) {

        console.log("adds movie to DB")
        this.props.addFavorite(movieObject)
    }

    render() {
        return (
            <div>
                {this.props.searchedMovies.map(movie => {
                    return (
                        <Container>
                            <br />
                            <img src={`${movie.Poster}`} />
                            <h2> {movie.Title} </h2>
                            <p>{movie.Year}</p>
                            <Button onClick={(e) => this.handleFavorite(movie)}>Add to Favorites</Button>
                        </Container>
                    )
                })
                }
            </div >
        );
    }
}

const mapStateToProps = (state) => {
    console.log("mapStateToProps", state)
    return { searchedMovies: state.searchedMovies }
}

export default connect(mapStateToProps, { searchMovies })(searchResults)