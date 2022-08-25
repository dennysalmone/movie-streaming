import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Subject, switchMap } from 'rxjs';
import { defaultAccFavouriteMovies } from 'src/app/store/movies/movies.actions';
import { IMoviesValues } from 'src/app/store/movies/movies.interfaces';
import { MoviesRequestService } from '../../shared/services/movies-request.service';

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.scss']
})
export class SiteLayoutComponent implements OnInit {

  private destroy$ = new Subject<void>();

  constructor(private store: Store, private moviesRequest: MoviesRequestService) {
  }

  ngOnInit(): void {
    this.setFavouriteMovies();
  }

  setFavouriteMovies(): void {
    this.moviesRequest.getFavoriteList().subscribe( ( movies: IMoviesValues ) => {
      this.store.dispatch(defaultAccFavouriteMovies({movies}))
    })
  }

}
