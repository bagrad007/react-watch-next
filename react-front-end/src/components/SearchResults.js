import React, { Component } from 'react';
import { connect } from 'react-redux'
import { searchMovies, addFavorite } from '../actions/index'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import MovieDisplay from './MovieDisplay'


class searchResults extends Component {

    handleFavorite(movieObject) {
        this.props.addFavorite(movieObject)
    }

    render() {
        return (
            <div>
                {this.props.searchedMovies.map(movie => {
                    return (
                        <Container>
                            <MovieDisplay props={movie} />
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

export default connect(mapStateToProps, { searchMovies, addFavorite })(searchResults)