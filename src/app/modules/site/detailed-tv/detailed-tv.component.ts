import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, switchMap, takeUntil } from 'rxjs';
import { IDetailedSeries } from 'src/app/modules/shared/interfaces/interfaces';
import { MoviesRequestService } from 'src/app/modules/shared/services/movies-request.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-detailed-tv',
  templateUrl: './detailed-tv.component.html',
  styleUrls: ['./detailed-tv.component.scss']
})
export class DetailedTvComponent implements OnInit {

  public id: number;
  public movie: IDetailedSeries;
  private destroy$: Subject<void> = new Subject<void>();
  public url = environment;
  
  constructor(private route: ActivatedRoute, private moviesService: MoviesRequestService) { }

  ngOnInit(): void {
    this.setId();
    this.subscribeChanges();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  setId(): void {
    this.route.paramMap.pipe(
      switchMap(params => params.getAll('id')),
      takeUntil(this.destroy$)
    ).subscribe(data => this.id = +data);
  }

  subscribeChanges(): void {
    this.moviesService.getSeries(this.id)
    .pipe(
      takeUntil(this.destroy$),
    ).subscribe((res: IDetailedSeries) => {
      this.movie = res;
      console.log(this.movie)
    });
  }


}
