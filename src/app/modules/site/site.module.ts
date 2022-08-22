import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteRoutingModule } from './site.routing.module';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MatIconModule } from '@angular/material/icon';
import { DetailedMovieComponent } from './detailed-movie/detailed-movie.component';
import { SearchingPageComponent } from './searching-page/searching-page.component';
import { DetailedTvComponent } from './detailed-tv/detailed-tv.component';
import { MatButtonModule } from '@angular/material/button';
import { SuggestComponent } from './suggest/suggest.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchingTvComponent } from './searching-tv/searching-tv.component';
import { SharedModule } from '../shared/shared.module';
import { MinutesToHoursPipe } from '../shared/pipes/time.pipe';
import { SiteLayoutComponent } from './site-layout/site-layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { CustomSearchComponent } from './custom-search/custom-search.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    MinutesToHoursPipe,
    MovieCardComponent,
    DetailedMovieComponent,
    SearchingPageComponent,
    DetailedTvComponent,
    SuggestComponent,
    SearchingTvComponent,
    SiteLayoutComponent,
    NavbarComponent,
    CustomButtonComponent,
    CustomInputComponent,
    CustomSearchComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    SiteRoutingModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class SiteModule { }
