import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

const Search = () => {
    return (
        <div>
            <InputGroup className="mb-1">
                <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-default">Search For Movie</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                />
                <InputGroup.Append>
                    <Button className="btn btn-primary">Search</Button>
                </InputGroup.Append>
            </InputGroup>
        </div>
    )
}

export default Search
