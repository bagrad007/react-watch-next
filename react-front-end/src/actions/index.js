export const fetchMovies = movie => {
    // Return an action
    return {
        type: 'FETCH_MOVIES',
        payload: movie
    };

};