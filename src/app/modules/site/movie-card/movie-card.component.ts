import { Component, Input, OnInit } from '@angular/core';
import { ICardData } from 'src/app/modules/shared/interfaces/interfaces';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  @Input() public movie: ICardData;
  @Input() public activeRoute: string;
  @Input() public fakeCard: boolean = false;
  @Input() public isAuth: boolean = false;
  @Input() public inFavs: boolean = false;

  public url = environment;
  public way: string;

  ngOnInit(): void {
    this.createRoutes();
  }

  createRoutes(): void {
    if(this.activeRoute === '/cinema/shows') {
      this.way = '/cinema/tv/'
    }
    if(this.activeRoute === '/cinema/movies') {
      this.way = '/cinema/movie/'
    }
  }
}
