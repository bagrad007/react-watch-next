import React, { Component } from 'react';
import { connect } from 'react-redux'
import { searchMovies, addFavorite } from '../actions/index'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import MovieDisplay from './MovieDisplay'
import '../stylesheets/moviecontainer.css'


class searchResults extends Component {

    handleFavorite(movieObject) {
        this.props.addFavorite(movieObject)
    }

    render() {
        return (
            <Container>
                <Row>
                    {this.props.searchedMovies.map(movie => {
                        return (
                            <Col>
                                <MovieDisplay movie={movie} />
                                <Button onClick={(e) => this.handleFavorite(movie)}>Add to Favorites</Button>
                            </Col>
                        )
                    })
                    }
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return { searchedMovies: state.searchedMovies }
}

export default connect(mapStateToProps, { searchMovies, addFavorite })(searchResults)