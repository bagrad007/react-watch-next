import React, { Component } from 'react'
import { connect } from 'react-redux'

export class List extends Component {
    render() {
        return (
            <div>
                <p>List of movies</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
}

export default connect(mapStateToProps)(List)

