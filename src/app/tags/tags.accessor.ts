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
  selector: 'app-tags',
  host: { '(changed)': 'onChange($event)' },
  providers: [TagsValueProvider]
})
export class TagsValueAccessor implements ControlValueAccessor {

  public onChange : (value) => void;

  public onTouched : () => void;

  constructor(private host: TagsComponent) { }

  public writeValue(value: string[]): void {
    this.host.tags = value;
  }

  public registerOnChange(callback: (value: any) => void): void {
    this.onChange = callback;
  }

  public registerOnTouched(callback: () => void): void {
    this.onTouched = callback;
  }
}