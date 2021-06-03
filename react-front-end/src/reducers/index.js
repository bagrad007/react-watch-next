import { combineReducers } from 'redux';
import movieList from './movieList';
import searchMovies from './searchMovies'

const rootReducer = combineReducers({
    movies: movieList,
    searchedMovies: searchMovies
})
export default rootReducer;