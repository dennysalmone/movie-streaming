import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteRoutingModule } from './site.routing.module';
import { SiteLayoutComponent } from './site-layout/site-layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MovieCardComponent } from './movie-card/movie-card.component';

@NgModule({
  declarations: [
    SiteLayoutComponent,
    NavbarComponent,
    MovieCardComponent
  ],
  imports: [
    CommonModule,
    SiteRoutingModule
  ]
})
export class SiteModule { }
