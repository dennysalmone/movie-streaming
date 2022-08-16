import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiteLayoutComponent } from './site-layout/site-layout.component';

const routes: Routes = [
  {
      path: "", component: SiteLayoutComponent, 
      children: [
          { path: "", component: SiteLayoutComponent },
          { path: "movies", component: SiteLayoutComponent },
          { path: "shows", component: SiteLayoutComponent },
          { path: "suggest", component: SiteLayoutComponent },
          { path: '**', redirectTo: '' }
      ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteRoutingModule {
}