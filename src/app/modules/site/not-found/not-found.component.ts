import { Component, OnInit } from '@angular/core';
import { ECustomColors, ECustomTypes } from '../../shared/enums/enum';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  public customTypes = ECustomTypes;
  public customColors = ECustomColors;
  constructor() { }

  ngOnInit(): void {
    
  }

  goHome(): void {
    alert(123)
  }

}
