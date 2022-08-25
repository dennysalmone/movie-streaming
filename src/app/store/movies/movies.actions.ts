import { createAction, props } from "@ngrx/store";
import { ICardData } from "src/app/modules/shared/interfaces/interfaces";
import { EActionsMovies } from "./movies.enums";
import { IMoviesValues } from "./movies.interfaces";

export const addPinMovie = createAction(EActionsMovies.addPin, props<{movie: ICardData}>()); 
export const addWatchMovie = createAction(EActionsMovies.addWatch, props<{movie: ICardData}>()); 
export const removeMovie = createAction(EActionsMovies.remove, props<{id: number}>()); 
export const defaultAccFavouriteMovies = createAction(EActionsMovies.set, props<{movies: IMoviesValues}>()); 