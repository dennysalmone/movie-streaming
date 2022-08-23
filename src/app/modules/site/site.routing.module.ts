import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DetailedMovieComponent } from "./detailed-movie/detailed-movie.component";
import { DetailedTvComponent } from "./detailed-tv/detailed-tv.component";
import { SearchingMoviesComponent } from "./searching-page/searching-movies.component";
import { SearchingTvComponent } from "./searching-tv/searching-tv.component";
import { SuggestComponent } from "./suggest/suggest.component";
import { SiteLayoutComponent } from "./site-layout/site-layout.component";
import { NotFoundComponent } from "./not-found/not-found.component";

const routes: Routes = [
  {
      path: "", component: SiteLayoutComponent, 
      children: [
          { path: "movies", component: SearchingMoviesComponent },
          { path: "shows", component: SearchingTvComponent },
          { path: "suggest", component: SuggestComponent },
          { path: "movie/:id", component: DetailedMovieComponent },
          { path: "tv/:id", component: DetailedTvComponent },
          { path: "not-found", component: NotFoundComponent },
          { path: "**", redirectTo: "not-found" },
      ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteRoutingModule {
}