import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, map, switchMap, debounceTime, Subject, takeUntil } from 'rxjs';
import { ECustomColors, ECustomSearchTypes, ECustomTypes, EVideoType } from 'src/app/modules/shared/enums/enum';
import { ICardData } from 'src/app/modules/shared/interfaces/interfaces';
import { MoviesRequestService } from 'src/app/modules/shared/services/movies-request.service';
import { AuthService } from '../../shared/services/auth.service';
import { Store } from '@ngrx/store';
import { IMoviesValues } from 'src/app/store/movies/movies.interfaces';
import { moviesSelector } from 'src/app/store/movies/movies.selector';
import { ECondition } from 'src/app/store/movies/movies.enums';

@Component({
  selector: 'app-searching-tv',
  templateUrl: './searching-tv.component.html',
  styleUrls: ['./searching-tv.component.scss']
})
export class SearchingTvComponent implements OnInit, OnDestroy {

  public cards: ICardData[] = [];
  public pinnedList: IMoviesValues = {};
  public customTypes = ECustomTypes;
  public searchTypes = ECustomSearchTypes;
  public customColors = ECustomColors;
  private page: number = 1;
  private readonly time = 400;
  private destroy$: Subject<void> = new Subject<void>();
  public pageId$: BehaviorSubject<number> = new BehaviorSubject<number>(this.page);
  public mock = [null, null, null, null, null, null, null, null];
  
  constructor(private moviesService: MoviesRequestService, private auth: AuthService, private store: Store) { }

  ngOnInit(): void {
    this.getSeries();
    this.subscribePins();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  subscribePins(): void {
    this.store.select(moviesSelector).pipe(takeUntil(this.destroy$)).subscribe({
      next: (value: any) => {
        this.pinnedList = value;
      },
    });
  }

  getSeries(): void {
    this.pageId$.pipe(
      takeUntil(this.destroy$),
      debounceTime(this.time),
      switchMap(page => this.moviesService.getTvSeriesList(page)),
      map(res => res.results)
    ).subscribe(result => {
      result.forEach(el => {
        const movie: ICardData = this.moviesService.cardGenerate(el.id, el.poster_path, el.vote_average, el.original_name, EVideoType.series);
        this.cards.push(movie);
        this.mock = [];
      })
    })
  }

  loadNewItems(): void {
    this.page = ++this.page
    this.pageId$.next(this.page)
  }

  isAuth(): boolean {
    return this.auth.isAuthenticated();
  }

  checkFavs(card: ICardData): boolean {
    if(this.pinnedList && this.pinnedList[card.id] && this.pinnedList[card.id].status === ECondition.pinned) {
      return true;
    }
    return false;
  }

}

