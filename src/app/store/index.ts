import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { IState } from './movies/movies.interfaces';
import { cardsReducer } from './movies/movies.reducers';
  
export interface State {
    cards: IState;
}

export const reducers: ActionReducerMap<State> = {
    cards: cardsReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
