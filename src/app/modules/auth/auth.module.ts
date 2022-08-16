import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { AuthPageComponent } from './auth-page/auth-page.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { AuthRoutingModule } from './auth.routing.module';

@NgModule({
  declarations: [
    AuthPageComponent,
    AuthLayoutComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class AuthModule { }
