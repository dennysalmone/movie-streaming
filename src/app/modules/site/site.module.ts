import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteRoutingModule } from './site.routing.module';
import { SiteLayoutComponent } from './site-layout/site-layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MatIconModule } from '@angular/material/icon';
import { DetailedMovieComponent } from './detailed-movie/detailed-movie.component';
import { SearchingPageComponent } from './searching-page/searching-page.component';
import { MinutesToHoursPipe } from 'src/app/shared/pipes/time.pipe';
import { DetailedTvComponent } from './detailed-tv/detailed-tv.component';
import { CustomButtonComponent } from './custom-button/custom-button.component';

@NgModule({
  declarations: [
    SiteLayoutComponent,
    NavbarComponent,
    MovieCardComponent,
    DetailedMovieComponent,
    SearchingPageComponent,
    DetailedTvComponent,
    MinutesToHoursPipe,
    CustomButtonComponent
  ],
  imports: [
    CommonModule,
    SiteRoutingModule,
    MatIconModule
  ]
})
export class SiteModule { }
