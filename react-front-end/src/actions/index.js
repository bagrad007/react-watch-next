
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
    debugger
    return () => {
        fetch(`https://imdb-api.com/en/API/SearchMovie/k_12345678/${searchTerm}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "5806e0633bmsh87a119c18ee23c2p19aa19jsn5cacf3be1145",
                "x-rapidapi-host": "imdb-api1.p.rapidapi.com"
            }
        })
            .then(response => {
                response.json();
            }).then(movie => {
                console.log("actioncreator", movie)
                // dispatch({ type: "SEARCH_MOVIES", payload: movie })
            }
            )
            .catch(err => {
                console.error(err);
            });
    }
}

