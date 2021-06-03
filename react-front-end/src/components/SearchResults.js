import React, { Component } from 'react';
import { connect } from 'react-redux'
import { searchedMovies } from '../reducers/index'

class searchResults extends Component {
    render() {
        return (
            <div>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log("mapState", state)
    return state.searchedMovies
}

export default connect(mapStateToProps)(searchResults)

