import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CUrl } from 'src/assets/constantas/constantas';
import { IDetailedMovie, IDetailedSeries, ICardData, IMoviesResponce, ISeriesResponce } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class MoviesRequestService {

  constructor(private http: HttpClient) {}

  getFilmList(page: number): Observable<IMoviesResponce> {
    return this.http.get<IMoviesResponce>(`${CUrl.movies}movie/popular/?${CUrl.moviesKey}&page=${page}`);
  }

  getMovie(id: number): Observable<IDetailedMovie> {
    return this.http.get<IDetailedMovie>(`${CUrl.movies}movie/${id}?${CUrl.moviesKey}`);
  }

  getSeries(id: number): Observable<IDetailedSeries> {
    return this.http.get<IDetailedSeries>(`${CUrl.movies}tv/${id}?${CUrl.moviesKey}`);
  }

  getTvSeriesList(page: number): Observable<ISeriesResponce> {
    return this.http.get<ISeriesResponce>(`${CUrl.movies}tv/popular/?${CUrl.moviesKey}&page=${page}`);
  }

  movieGenerator(id: number, poster: string, vote: number, name: string): ICardData {
    let movie: ICardData = {
      id: id,
      poster_path: poster,
      vote_average: vote,
      name: name,
    }
    return movie;
  }

}
