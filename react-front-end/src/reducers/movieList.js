const movieList = (state = [], action) => {
    switch (action.type) {
        case "FETCH_MOVIES":
            return action.payload
        case "FAVORITE_MOVIE":
            return [...state, action.payload]
        case "DELETE_MOVIE":
            return state.filter(movie => movie.id !== action.payload)

        default:
            return state
    }
}

export default movieList