import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DetailedMovieComponent } from "./detailed-movie/detailed-movie.component";
import { DetailedTvComponent } from "./detailed-tv/detailed-tv.component";
import { SearchingMoviesComponent } from "./searching-page/searching-movies.component";
import { SearchingTvComponent } from "./searching-tv/searching-tv.component";
import { SiteLayoutComponent } from "./site-layout/site-layout.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { PinnedListComponent } from "./pinned-list/pinned-list.component";
import { AuthGuard } from "../shared/guards/auth-guard";

const routes: Routes = [
  {
      path: "", component: SiteLayoutComponent, 
      children: [
          { path: "movies", component: SearchingMoviesComponent },
          { path: "shows", component: SearchingTvComponent },
          { path: "pinned", component: PinnedListComponent, canActivate: [AuthGuard] },
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