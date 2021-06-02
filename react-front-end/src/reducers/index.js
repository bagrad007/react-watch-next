const movieList = (state = { movies: [] }, action) => {
    switch (action.type) {
        case "FETCH_MOVIES":
            return { movies: action.payload }
        default:
            return state
    }
}

export default movieList