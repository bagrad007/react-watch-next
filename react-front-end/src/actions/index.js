
export const fetchMovies = () => {

    return (dispatch) => {
        fetch("http://localhost:3001/movies")
            .then(resp => resp.json())
            .then(movies => {
                console.log("fetchMovies", movies)
                dispatch({ type: "FETCH_MOVIES", payload: movies })
            })
    };

};

export const searchMovies = (searchTerm) => {
    return (dispatch) => {
        fetch(`http://www.omdbapi.com/?s=${searchTerm}&apikey=2d90d5c1`)
            .then(response => response.json())
            .then(movie => {
                console.log("actioncreator", movie)
                dispatch({ type: "SEARCH_MOVIES", payload: movie.Search })
            }
            )
            .catch(err => {
                console.error(err);
            });
    }
}

