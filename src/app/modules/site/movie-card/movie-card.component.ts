import { Component, Input, OnInit } from '@angular/core';
import { ICardData } from 'src/app/modules/shared/interfaces/interfaces';
import { environment } from 'src/environments/environment';
import { Store } from '@ngrx/store';
import { addPinMovie, removeMovie } from 'src/app/store/movies/movies.actions';
import { EVideoType } from '../../shared/enums/enum';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  @Input() public movie: ICardData;
  @Input() public fakeCard: boolean = false;
  @Input() public isAuth: boolean = false;
  @Input() public inFavs: boolean = false;

  public url = environment;
  public way: string;

  constructor (private store: Store) {
  }

  ngOnInit(): void {
    this.createRoutes();
  }

  createRoutes(): void {
    if(this.movie && this.movie.videoType === EVideoType.series) {
      this.way = '/cinema/tv/'
    }
    if(this.movie && this.movie.videoType === EVideoType.movie) {
      this.way = '/cinema/movie/'
    }
  }

  pinMovie(): void {
    this.store.dispatch(addPinMovie({movie: this.movie}))
  }

  removeMovie(): void {
    this.store.dispatch(removeMovie({id: this.movie.id}))
  }

}
