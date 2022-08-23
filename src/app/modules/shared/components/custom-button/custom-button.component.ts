import { Component, Input, OnInit } from '@angular/core';
import { ECustomColors, ECustomTypes } from '../../enums/enum';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss']
})
export class CustomButtonComponent implements OnInit {
  @Input() type: ECustomTypes;
  @Input() buttonLabel: string;
  @Input() colors: ECustomColors = ECustomColors.primary;
  @Input() disabled: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}



