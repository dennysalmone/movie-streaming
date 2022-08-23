import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ECustomTypes } from 'src/app/modules/shared/enums/enum';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CustomInputComponent),
    multi: true
  }]
})
export class CustomInputComponent implements OnInit, ControlValueAccessor {
  @Input() labelInput: string = 'Text'
  @Input() logos: ECustomTypes;
  @Input() iconLeft: string = 'ic-logo';
  @Input() iconRight: string = 'ic-logo';
  @Input() password: boolean = false;
   
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
