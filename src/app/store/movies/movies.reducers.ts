import { createReducer, on } from "@ngrx/store";
import { addPinMovie, addWatchMovie, removeMovie, defaultAccFavouriteMovies } from "./movies.actions";
import { ECondition } from "./movies.enums";
import { IMoviesValues, IState } from "./movies.interfaces";

export const initialState: IState = {
    movies: {}
}

export const cardsReducer = createReducer(
    initialState,
    on(addPinMovie, (state, { movie }) => {
        const movies = {...state.movies}
        const pinned = ECondition.pinned
        const elem: IMoviesValues = {[movie.id]:{status: pinned, card: movie}}
        return {...state, movies: {...movies, ...elem} };
    }),
    on(addWatchMovie, (state, { movie }) => {
        const movies = {...state.movies}
        const watched: ECondition = ECondition.watched
        const elem: IMoviesValues = {[movie.id]:{status: watched, card: movie}}
        return {...state, movies: {...movies, ...elem} };
    }),
    on(removeMovie, (state, { id }) => {
        let movies = {...state.movies}
        delete movies[id];
        return {...state, movies };
    }),
    on(defaultAccFavouriteMovies, (state, { movies }) => {
        return {...state, movies };
    }),
);