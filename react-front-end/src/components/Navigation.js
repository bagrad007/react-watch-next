import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Route, Switch, useHistory, withRouter } from 'react-router-dom'

import Home from './Home'
import Favorites from './Favorites'
import Search from './Search'

const Navigation = () => {
    const history = useHistory()

    const handleHome = e => {
        e.preventDefault()
        history.push("/")
    }

    const handleList = e => {
        e.preventDefault()
        history.push("/favorites")
    }
    const handleSearch = e => {
        e.preventDefault()
        history.push("/search")
    }
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/" onClick={handleHome}>Watch Next</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/list" onClick={handleList}>Favorited Movies</Nav.Link>
                        <Nav.Link href="/search" onClick={handleSearch}>Search</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Switch>
                <Route path='/' exact render={props => <Home {...props} />} />
                <Route path='/favorites' exact render={props => <Favorites {...props} />} />
                <Route path='/search' exact render={props => <Search {...props} />} />
            </Switch>
        </>

    );

}

export default Navigation;

