import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { ICardData, IMoviesResponce, ISeriesResponce } from 'src/app/shared/interfaces/interfaces';
import { MoviesRequestService } from 'src/app/shared/services/movies-request.service';

@Component({
  selector: 'app-searching-page',
  templateUrl: './searching-page.component.html',
  styleUrls: ['./searching-page.component.scss']
})
export class SearchingPageComponent implements OnInit {

  public movies: ICardData[] = [];
  private id = 1;
  public routeName: string;
  constructor(private moviesService: MoviesRequestService, private router: Router) { }

  ngOnInit(): void {
    this.checkRoute();
  }

  checkRoute() {
    this.routeName = this.router.url;
    if(this.routeName === '/cinema/shows') {
      this.getSeries(this.id);
    }
    if(this.routeName === '/cinema/movies') {
      this.getMovies(this.id);
    }
  }

  getMovies(id: number): void {
    this.moviesService.getFilmList(id).pipe(
      map((res: IMoviesResponce) => res.results)
    ).subscribe(result => {
      result.forEach((el) => {
        let movie: ICardData = this.moviesService.movieGenerator(el.id, el.poster_path, el.vote_average, el.title)
        this.movies.push(movie)
      })
      console.log(this.movies)
    })
  }

  getSeries(id: number): void {
    this.moviesService.getTvSeriesList(id).pipe(
      map((res: ISeriesResponce) => res.results)
    ).subscribe(result => {
      result.forEach((el) => {
        let movie: ICardData = this.moviesService.movieGenerator(el.id, el.poster_path, el.vote_average, el.original_name)
        this.movies.push(movie)
      })
      console.log(this.movies)
    })
  }


}
