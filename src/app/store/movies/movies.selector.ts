import { createFeatureSelector, createSelector } from "@ngrx/store"
import { IState } from "./movies.interfaces";

export const globalSelector = createFeatureSelector<IState>('cards');

export const moviesSelector = createSelector(
    globalSelector,
    state => state.movies
)
