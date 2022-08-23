import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, switchMap, debounceTime, Subject, takeUntil } from 'rxjs';
import { ECustomColors, ECustomSearchTypes, ECustomTypes, ERoutes } from 'src/app/modules/shared/enums/enum';
import { ICardData, IMovie, IMoviesResponce } from 'src/app/modules/shared/interfaces/interfaces';
import { MoviesRequestService } from 'src/app/modules/shared/services/movies-request.service';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-searching-movies',
  templateUrl: './searching-movies.component.html',
  styleUrls: ['./searching-movies.component.scss']
})
export class SearchingMoviesComponent implements OnInit, OnDestroy {

  public cards: ICardData[] = [];
  public routeName: string;
  private page: number = 1;
  private readonly time = 400;
  private destroy$: Subject<void> = new Subject<void>();
  private pageId$: BehaviorSubject<number> = new BehaviorSubject<number>(this.page);
  public customTypes = ECustomTypes;
  public searchTypes = ECustomSearchTypes;
  public customColors = ECustomColors;
  
  constructor(private moviesService: MoviesRequestService, private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
    this.getMovies();
    this.routeName = this.router.url;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getMovies(): void {
    this.pageId$.pipe(
      takeUntil(this.destroy$),
      debounceTime(this.time),
      switchMap(page => this.moviesService.getFilmList(page)),
      map(res => res.results)
    ).subscribe(result => {
      result.forEach(el => {
        const movie: ICardData = this.moviesService.cardGenerate(el.id, el.poster_path, el.vote_average, el.title);
        this.cards.push(movie);
      })
    })
  }

  loadNewItems(): void {
    this.page = ++this.page
    this.pageId$.next(this.page)
  }

  counter(num: number): null[] {
    const arr = [];
    for(let i=0; i<num; i++) {
      arr.push(null)
    }
    return arr;
  }

  isAuth(): boolean {
    return this.auth.isAuthenticated();
  }

}
