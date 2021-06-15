
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
    return (dispatch) => {
        const movie = {
            Title: movieObject.Title,
            Year: movieObject.Year,
            Poster: movieObject.Poster
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

export const deleteMovie = (movieId) => {
    console.log(movieId)
    return (dispatch) => {
        fetch(`http://localhost:3001/movies/${movieId}`, {
            method: "DELETE",
            headers: { Accept: "application/json", "Content-Type": "application/json" },
        }).then(r => r.json())
            .then(movie => dispatch({ type: "DELETE_MOVIE", payload: movie.id }))
    }
}