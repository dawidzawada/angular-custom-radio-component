import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioComponent),
      multi: true,
    },
  ],
})
export class RadioComponent implements ControlValueAccessor {
  @Input('inputId') inputId = '';
  @Input() name: string = '';
  @Input() disabled: boolean = false;
  @Input() inactive: boolean = false;
  @Input('value') _value: any = '';
  modelValue: any = '';

  get value() {
    return this._value;
  }

  set value(value) {
    if (!!value) {
      this._value = value;
      this.onChange(value);
      this.onTouched();
    }
  }

  onChange: any = (onchanges: any) => {};

  onTouched: any = () => {};

  onChanged() {
    this.onChange(this.modelValue);
  }

  //Functions for the NG_VALUE_ACCESSOR:

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  writeValue(value: any) {
    this.modelValue = value;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}