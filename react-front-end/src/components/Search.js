import React from 'react'
import SearchResults from './SearchResults'

import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { searchMovies } from '../actions/index'
import { connect } from 'react-redux'



class Search extends React.Component {
    state = { term: '' }



    handleSearch = (e) => {
        e.preventDefault()
        this.props.searchMovies(this.state.term)

    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSearch}>
                    <InputGroup className="mb-1">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-default">Search For Movie</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl value={this.state.term} onChange={e => this.setState({ term: e.target.value })}
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                        />
                        <InputGroup.Append>
                            <Button type="submit" className="btn btn-primary">Search</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </form>
                <SearchResults />
            </div >
        )
    }
}



export default connect(null, { searchMovies })(Search)
