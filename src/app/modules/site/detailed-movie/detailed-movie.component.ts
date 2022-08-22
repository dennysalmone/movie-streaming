import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';
import { IDetailedMovie } from 'src/app/modules/shared/interfaces/interfaces';
import { MoviesRequestService } from 'src/app/modules/shared/services/movies-request.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-detailed-movie',
  templateUrl: './detailed-movie.component.html',
  styleUrls: ['./detailed-movie.component.scss']
})
export class DetailedMovieComponent implements OnInit, OnDestroy {

  public id: number;
  public movie: IDetailedMovie;
  private aSub: Subscription;
  private bSub: Subscription;
  public url = environment;
  constructor(private route: ActivatedRoute, private moviesService: MoviesRequestService) { }

  ngOnInit(): void {
    this.setId();
    this.subscribeChanges();
  }

  ngOnDestroy(): void {
    this.aSub.unsubscribe();
    this.bSub.unsubscribe();
  }

  setId(): void {
    this.bSub = this.route.paramMap.pipe(
      switchMap(params => params.getAll('id'))
    ).subscribe(data => this.id = +data);
  }

  subscribeChanges(): void {
    this.aSub = this.moviesService.getMovie(this.id).subscribe((res: IDetailedMovie) => {
      this.movie = res;
      console.log(this.movie)
    });
  }


}
