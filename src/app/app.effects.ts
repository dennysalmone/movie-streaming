import { Injectable, OnDestroy } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { mergeMap, catchError, map, EMPTY, of } from 'rxjs';
import { addPinMovie, removeMovie, addWatchMovie } from 'src/app/store/movies/movies.actions';
import { MoviesRequestService } from './modules/shared/services/movies-request.service';
import { IMoviesValues } from './store/movies/movies.interfaces';
import { moviesSelector } from './store/movies/movies.selector';

@Injectable()
export class AppEffects implements OnDestroy {

  private data: IMoviesValues;
  private pinned = this.store.select(moviesSelector).pipe().subscribe({
    next: (value: IMoviesValues) => {
      this.data = value;
    },
  });
  
  constructor(private actions: Actions, private moviesService: MoviesRequestService, private store: Store ) {}

  ngOnDestroy(): void {
    this.pinned.unsubscribe();
  }

  changePinnedList$ = createEffect(() => this.actions.pipe(
    ofType(addPinMovie, removeMovie, addWatchMovie),
    mergeMap(() => this.moviesService.changeFavoriteList(this.data))),
    {dispatch: false}
  )


}
