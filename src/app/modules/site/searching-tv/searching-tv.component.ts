import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, switchMap, debounceTime, Subject, takeUntil } from 'rxjs';
import { ECustomColors, ECustomSearchTypes, ECustomTypes, ERoutes } from 'src/app/modules/shared/enums/enum';
import { ICardData, IMovie, IMoviesResponce } from 'src/app/modules/shared/interfaces/interfaces';
import { MoviesRequestService } from 'src/app/modules/shared/services/movies-request.service';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-searching-tv',
  templateUrl: './searching-tv.component.html',
  styleUrls: ['./searching-tv.component.scss']
})
export class SearchingTvComponent implements OnInit, OnDestroy {

  public cards: ICardData[] = [];
  public customTypes = ECustomTypes;
  public searchTypes = ECustomSearchTypes;
  public customColors = ECustomColors;
  private page: number = 1;
  private readonly time = 400;
  public routeName: string;
  private destroy$: Subject<void> = new Subject<void>();
  public pageId$: BehaviorSubject<number> = new BehaviorSubject<number>(this.page);
  
  constructor(private moviesService: MoviesRequestService, private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
    this.getSeries();
    this.routeName = this.router.url;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getSeries(): void {
    this.pageId$.pipe(
      takeUntil(this.destroy$),
      debounceTime(this.time),
      switchMap(page => this.moviesService.getTvSeriesList(page)),
      map(res => res.results)
    ).subscribe(result => {
      result.forEach(el => {
        const movie: ICardData = this.moviesService.cardGenerate(el.id, el.poster_path, el.vote_average, el.original_name);
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

