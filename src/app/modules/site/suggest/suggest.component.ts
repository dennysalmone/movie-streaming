import { Component, OnInit } from '@angular/core';
import { ECustomSearchTypes, ECustomTypes } from 'src/app/modules/site/enums/enum';

@Component({
  selector: 'app-suggest',
  templateUrl: './suggest.component.html',
  styleUrls: ['./suggest.component.scss']
})
export class SuggestComponent implements OnInit {

  public inputType = ECustomTypes;
  public searchType = ECustomSearchTypes;
  constructor() { }

  ngOnInit(): void {
  }

}
