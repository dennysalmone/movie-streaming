import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss']
})
export class CustomButtonComponent implements OnInit {
  @Input() type: "primary" | "secondary" = "primary";
  @Input() buttonLabel: string;
  @Input() logo: [boolean, boolean] = [false, false]
  constructor() { }

  ngOnInit(): void {
  }

}
