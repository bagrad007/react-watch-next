import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMovies, deleteMovie } from '../actions/index'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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
                <Container>
                    <Row>
                        {
                            this.props.movies.map(movie => {
                                return (
                                    <Col>
                                        <MovieDisplay movie={movie} handleDelete={this.handleDelete} />
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Container>
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

