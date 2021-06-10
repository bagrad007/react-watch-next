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
            </Jumbotron>
        </>
    )
}
export default Home