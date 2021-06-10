import React from 'react'
import image from '../imgs/movie-reel.png'
import '../stylesheets/reel.css'
import Jumbotron from 'react-bootstrap/Jumbotron'

const Home = () => {
    return (
        <>
            <Jumbotron>
                <h1 className="headerHome">Welcome to WatchNext!</h1>
                <img className="reel" src={image} />
                <h2 className='headerP'>To start, head on over to Search on the Navbar, and add a movie you'd like to favorite to watch later!</h2>
            </Jumbotron>
        </>
    )
}
export default Home