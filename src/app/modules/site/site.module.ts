import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteRoutingModule } from './site.routing.module';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MatIconModule } from '@angular/material/icon';
import { DetailedMovieComponent } from './detailed-movie/detailed-movie.component';
import { SearchingMoviesComponent } from './searching-page/searching-movies.component';
import { DetailedTvComponent } from './detailed-tv/detailed-tv.component';
import { MatButtonModule } from '@angular/material/button';
import { SuggestComponent } from './suggest/suggest.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchingTvComponent } from './searching-tv/searching-tv.component';
import { SharedModule } from '../shared/shared.module';
import { MinutesToHoursPipe } from '../shared/pipes/time.pipe';
import { SiteLayoutComponent } from './site-layout/site-layout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    MinutesToHoursPipe,
    MovieCardComponent,
    DetailedMovieComponent,
    SearchingMoviesComponent,
    DetailedTvComponent,
    SuggestComponent,
    SearchingTvComponent,
    SiteLayoutComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    SiteRoutingModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule
  ]
})
export class SiteModule { }
