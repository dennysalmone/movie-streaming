import { Component, OnDestroy, OnInit } from '@angular/core';
import { ECondition } from 'src/app/store/movies/movies.enums';
import { IMoviesValues } from 'src/app/store/movies/movies.interfaces';
import { ICardData } from '../../shared/interfaces/interfaces';
import { AuthService } from '../../shared/services/auth.service';
import { Store } from '@ngrx/store';
import { moviesSelector } from 'src/app/store/movies/movies.selector';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-pinned-list',
  templateUrl: './pinned-list.component.html',
  styleUrls: ['./pinned-list.component.scss']
})
export class PinnedListComponent implements OnInit, OnDestroy {
  public cards: ICardData[] = [];

  private destroy$: Subject<void> = new Subject<void>();

  constructor(private store: Store, private auth: AuthService) { }

  ngOnInit(): void {
    this.subscribePins();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  subscribePins(): void {
    this.store.select(moviesSelector).pipe(takeUntil(this.destroy$)).subscribe({
      next: (value: any) => {
        this.setCards(value);
      },
    });
  }

  setCards(value: IMoviesValues){
    this.cards = [];
    const keys = Object.keys(value)
    keys.forEach(key => {
      this.cards.push(value[+key].card)
    })
  }

  isAuth(): boolean {
    return this.auth.isAuthenticated();
  }


}
