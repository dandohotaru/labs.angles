import { forwardRef } from '@angular/core';
import { Directive, Provider } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { TagsComponent } from './tags.component';

const TagsValueProvider: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TagsValueAccessor),
  multi: true
}

@Directive({
  selector: 'tags',
  host: { '(changed)': 'onChange($event)' },
  providers: [TagsValueProvider]
})
export class TagsValueAccessor implements ControlValueAccessor {

  public onChange = (value) => { };
  public onTouched = () => { };

  constructor(private host: TagsComponent) { }

  public writeValue(value: any): void {
    this.host.setValue(value);
  }

  public registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}