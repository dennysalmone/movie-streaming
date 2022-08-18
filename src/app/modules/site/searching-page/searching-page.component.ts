import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, switchMap, debounceTime } from 'rxjs';
import { ERoutes } from 'src/app/shared/emuns/enum';
import { ICardData } from 'src/app/shared/interfaces/interfaces';
import { MoviesRequestService } from 'src/app/shared/services/movies-request.service';

@Component({
  selector: 'app-searching-page',
  templateUrl: './searching-page.component.html',
  styleUrls: ['./searching-page.component.scss']
})
export class SearchingPageComponent implements OnInit, OnDestroy {

  public cards: ICardData[] = [];
  private id: number = 1;
  private readonly time = 400;
  public routeName: string;
  public pageId$: BehaviorSubject<number> = new BehaviorSubject<number>(this.id);
  constructor(private moviesService: MoviesRequestService, private router: Router) { }

  ngOnInit(): void {
    this.checkRoute();
  }

  ngOnDestroy(): void {
    this.pageId$.complete();
  }

  checkRoute() {
    this.routeName = this.router.url;
    if(this.routeName === ERoutes.Shows) {
      this.getSeries();
    }
    if(this.routeName === ERoutes.Movies) {
      this.getMovies();
    } // refactoring + subj,<void>
  }

  getMovies(){
    this.pageId$.pipe(
      debounceTime(this.time),
      switchMap(page => this.moviesService.getFilmList(page)),
      map(res => res.results)
    ).subscribe(result => {
      result.forEach((el) => {
        let movie: ICardData = this.moviesService.cardGenerate(el.id, el.poster_path, el.vote_average, el.title);
        this.cards.push(movie);
      })
    })
  }

  getSeries(){
    this.pageId$.pipe(
      debounceTime(this.time),
      switchMap(page => this.moviesService.getTvSeriesList(page)),
      map(res => res.results)
    ).subscribe(result => {
      result.forEach((el) => {
        let movie: ICardData = this.moviesService.cardGenerate(el.id, el.poster_path, el.vote_average, el.original_name);
        this.cards.push(movie);
      })
    })
  }

  loadNewItems(): void {
    this.id = ++this.id
    this.pageId$.next(this.id)
  }

  counter(num: number): any[] {
    let arr = [];
    for(let i=0; i<num; i++) {
      arr.push(null)
    }
    return arr;
  }


}
