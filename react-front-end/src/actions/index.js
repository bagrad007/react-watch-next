
export const fetchMovies = () => {

    return (dispatch) => {
        fetch("http://localhost:3001/movies")
            .then(resp => resp.json())
            .then(movies => {
                dispatch({ type: "FETCH_MOVIES", payload: movies })
            })
    };

};

export const searchMovies = (searchTerm) => {
    return (dispatch) => {
        fetch(`http://www.omdbapi.com/?s=${searchTerm}&apikey=2d90d5c1`)
            .then(response => response.json())
            .then(movie => {
                dispatch({ type: "SEARCH_MOVIES", payload: movie.Search })
            }
            )
            .catch(err => {
                console.error(err);
            });
    }
}

export const addFavorite = (movieObject) => {
    console.log("addFavorite argument", movieObject)
    return (dispatch) => {
        const movie = {
            name: movieObject.Title,
            year: movieObject.Year,
            img: movieObject.Poster
        }
        fetch("http://localhost:3001/movies", {
            method: 'POST',
            headers: { Accept: "application/json", "Content-Type": "application/json" },
            body: JSON.stringify({ movie: movie })
        })
            .then(r => r.json())
            .then(movieObject => {
                return dispatch({ type: 'FAVORITE_MOVIE', payload: movieObject })
            })
    }
}
