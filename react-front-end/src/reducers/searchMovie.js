const searchMovies = (state = { movies: [] }, action) => {
    switch (action.type) {
        case "SEARCH_MOVIES":
            return { movies: action.payload }
        default:
            return state
    }
}

export default searchMovies