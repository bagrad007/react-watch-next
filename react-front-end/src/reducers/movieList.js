const movieList = (state = [], action) => {
    console.log("action", action)
    switch (action.type) {
        case "FETCH_MOVIES":
            return action.payload
        default:
            return state
    }
}

export default movieList