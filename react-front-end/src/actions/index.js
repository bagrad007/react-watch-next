const fetchMovies = () => {

    return (dispatch) => {
        fetch("http://localhost:3001/movies")
            .then(resp => resp.json())
            .then(movies => {
                dispatch({ type: "FETCH_MOVIES", payload: movies })
            })
    };

};

export default fetchMovies