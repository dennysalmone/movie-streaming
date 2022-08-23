import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IDetailedMovie, IDetailedSeries, ICardData, IMoviesResponce, ISeriesResponce, IGeneralResponce } from '../interfaces/interfaces';
import { SharedModule } from '../shared.module';

@Injectable({
  providedIn: 'root'
})
export class MoviesRequestService {

  constructor(private http: HttpClient) {}

  getFilmList(page: number): Observable<IMoviesResponce> {
    return this.http.get<IMoviesResponce>(`${environment.movies}movie/popular/?${environment.moviesKey}&page=${page}${environment.otherData}`);
  }

  getMovie(id: number): Observable<IDetailedMovie> {
    return this.http.get<IDetailedMovie>(`${environment.movies}movie/${id}?${environment.moviesKey}${environment.otherData}`);
  }

  getSeries(id: number): Observable<IDetailedSeries> {
    return this.http.get<IDetailedSeries>(`${environment.movies}tv/${id}?${environment.moviesKey}${environment.otherData}`);
  }

  getTvSeriesList(page: number): Observable<ISeriesResponce> {
    return this.http.get<ISeriesResponce>(`${environment.movies}tv/popular/?${environment.moviesKey}&page=${page}${environment.otherData}`);
  }

  searchAny(query: string): Observable<IGeneralResponce> {
    return this.http.get<IGeneralResponce>(`${environment.movies}search/multi/?${environment.moviesKey}&query=${query}${environment.otherData}`);
  }

  searchMovies(query: string): Observable<IGeneralResponce> {
    return this.http.get<IGeneralResponce>(`${environment.movies}search/movie/?${environment.moviesKey}&query=${query}${environment.otherData}`);
  }

  searchSeries(query: string): Observable<IGeneralResponce> {
    return this.http.get<IGeneralResponce>(`${environment.movies}search/tv/?${environment.moviesKey}&query=${query}${environment.otherData}`);
  }

  

  cardGenerate(id: number, poster: string, vote: number, name: string): ICardData {
    const movie: ICardData = {
      id: id,
      poster_path: poster,
      vote_average: vote,
      name: name,
    }
    return movie;
  }

}
