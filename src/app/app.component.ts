import { Component, OnInit } from '@angular/core';
import { AuthService } from './modules/shared/services/auth.service';
import { IconsService } from './modules/shared/services/icons.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'movies-streaming';
  constructor(private auth: AuthService, private iconService: IconsService){}

  ngOnInit (): void {
    this.auth.setTokenFromLocalStorage();
    this.iconService.registerIcons();
  }  

}
