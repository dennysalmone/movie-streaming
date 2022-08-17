import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DetailedMovieComponent } from "./detailed-movie/detailed-movie.component";
import { DetailedTvComponent } from "./detailed-tv/detailed-tv.component";
import { SearchingPageComponent } from "./searching-page/searching-page.component";
import { SiteLayoutComponent } from "./site-layout/site-layout.component";

const routes: Routes = [
  {
      path: "", component: SiteLayoutComponent, 
      children: [
          { path: "", component: SearchingPageComponent },
          { path: "movies", component: SearchingPageComponent },
          { path: "shows", component: SearchingPageComponent },
          // { path: "suggest", component: Sus },
          { path: "movie/:id", component: DetailedMovieComponent },
          { path: "tv/:id", component: DetailedTvComponent },
          // { path: "**", component: NotFoundComponent },
          { path: "**", redirectTo: "" }
      ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteRoutingModule {
}