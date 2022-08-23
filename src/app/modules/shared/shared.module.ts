import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';
import { MatIconModule } from '@angular/material/icon';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomSearchComponent } from './components/custom-search/custom-search.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [
    CustomButtonComponent,
    CustomInputComponent,
    CustomSearchComponent,
    NavbarComponent,
    ToolbarComponent
  ],
  exports: [
    CustomButtonComponent,
    CustomInputComponent,
    CustomSearchComponent,
    NavbarComponent,
    ToolbarComponent
  ]
})
export class SharedModule { }
