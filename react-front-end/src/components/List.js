import React, { Component } from 'react'
import { connect } from 'react-redux'
import fetchMovies from '../actions/index'

export class List extends Component {

    componentDidMount() {
        this.props.fetchMovies()
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state.movies
}


export default connect(mapStateToProps, { fetchMovies })(List)

