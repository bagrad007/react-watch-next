import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { searchMovies } from '../actions/index'
import { useDispatch } from 'react-redux'


const Search = (props) => {

    const dispatch = useDispatch()

    const handleSearch = (e) => {
        e.preventDefault()
        dispatch(searchMovies(e.target.children[0].children[1].value))

    }
    return (
        <div>
            <form>
                <InputGroup className="mb-1">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-default">Search For Movie</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onSubmit={handleSearch}
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                    />
                    <InputGroup.Append>
                        <Button className="btn btn-primary">Search</Button>
                    </InputGroup.Append>
                </InputGroup>
            </form>
        </div>
    )
}

export default Search
