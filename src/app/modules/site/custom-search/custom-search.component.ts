import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ECustomSearchTypes } from 'src/app/modules/site/enums/enum';

@Component({
  selector: 'app-custom-search',
  templateUrl: './custom-search.component.html',
  styleUrls: ['./custom-search.component.scss']
})
export class CustomSearchComponent implements OnInit {
  @Input() labelInput: string = 'Text';
  @Input() logos: ECustomSearchTypes;
  public customControl = new FormControl();
  public onChange: Function;
  public onTouch: Function;

  ngOnInit(): void {
    this.customControl.valueChanges.subscribe((value) => {
      if(this.onChange) {
        this.onChange(value)
      }
    })
  }

  writeValue(value: string){
    this.customControl.setValue(value);
  }

  registerOnChange(func: Function){
    this.onChange = func;
  }

  registerOnTouched(func: Function): void {
    this.onTouch = func;
  }

}
