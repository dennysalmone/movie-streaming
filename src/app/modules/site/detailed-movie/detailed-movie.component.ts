import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';
import { IDetailedMovie } from 'src/app/shared/interfaces/interfaces';
import { MoviesRequestService } from 'src/app/shared/services/movies-request.service';
import { CUrl } from 'src/assets/constantas/constantas';

@Component({
  selector: 'app-detailed-movie',
  templateUrl: './detailed-movie.component.html',
  styleUrls: ['./detailed-movie.component.scss']
})
export class DetailedMovieComponent implements OnInit, OnDestroy {

  public id: number;
  public movie: IDetailedMovie;
  private sub: Subscription;
  public url = CUrl;
  constructor(private route: ActivatedRoute, private moviesService: MoviesRequestService) { }

  ngOnInit(): void {
    this.setId();
    this.subscribeChanges();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  setId(): void {
    this.route.paramMap.pipe(
      switchMap(params => params.getAll('id'))
    ).subscribe(data => this.id = +data);
  }

  subscribeChanges(): void {
    this.sub = this.moviesService.getMovie(this.id).subscribe((res: IDetailedMovie) => {
      this.movie = res;
      console.log(this.movie)
    });
  }


}
