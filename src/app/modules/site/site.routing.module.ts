import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DetailedMovieComponent } from "./detailed-movie/detailed-movie.component";
import { DetailedTvComponent } from "./detailed-tv/detailed-tv.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { SearchingPageComponent } from "./searching-page/searching-page.component";
import { SiteLayoutComponent } from "./site-layout/site-layout.component";
import { SuggestComponent } from "./suggest/suggest.component";

const routes: Routes = [
  {
      path: "", component: SiteLayoutComponent, 
      children: [
          { path: "", component: SearchingPageComponent },
          { path: "movies", component: SearchingPageComponent },
          { path: "shows", component: SearchingPageComponent },
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