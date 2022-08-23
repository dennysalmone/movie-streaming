import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  public isAuth: boolean = this.auth.isAuthenticated();
  @Output() closeTool: EventEmitter<void> = new EventEmitter();
  
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.auth.logout();
  }

  close(): void {
    this.closeTool.emit();
  }

}
