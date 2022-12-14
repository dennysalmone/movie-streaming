import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';

import { AuthPageComponent } from './auth-page/auth-page.component';

const routes: Routes = [
  {
      path: "", component: AuthLayoutComponent, 
      children: [
          { path: "", component: AuthPageComponent },
          { path: '**', redirectTo: '' }
      ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}