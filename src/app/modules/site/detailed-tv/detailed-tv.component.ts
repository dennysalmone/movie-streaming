import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';
import { IDetailedSeries } from 'src/app/shared/interfaces/interfaces';
import { MoviesRequestService } from 'src/app/shared/services/movies-request.service';
import { CUrl } from 'src/assets/constantas/constantas';

@Component({
  selector: 'app-detailed-tv',
  templateUrl: './detailed-tv.component.html',
  styleUrls: ['./detailed-tv.component.scss']
})
export class DetailedTvComponent implements OnInit {

  public id: number;
  public movie: IDetailedSeries;
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
    this.sub = this.moviesService.getSeries(this.id).subscribe((res: IDetailedSeries) => {
      this.movie = res;
      console.log(this.movie)
    });
  }


}
