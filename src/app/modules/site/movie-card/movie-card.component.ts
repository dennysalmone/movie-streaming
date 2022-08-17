import { Component, Input, OnInit } from '@angular/core';
import { ICardData } from 'src/app/shared/interfaces/interfaces';
import { CUrl } from 'src/assets/constantas/constantas';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  @Input() public movie: ICardData;
  @Input() public activeRoute: string;
  public url = CUrl;
  public way: string;
  constructor() { }

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
