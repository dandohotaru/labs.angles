import { forwardRef } from '@angular/core';
import { Directive, Provider } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { MarkdownComponent } from './markdown.component';

const MarkdownValueProvider: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MarkdownAccessor),
  multi: true
}

@Directive({
  selector: 'app-markdown',
  host: { '(changed)': 'onChange($event)' },
  providers: [MarkdownValueProvider]
})
export class MarkdownAccessor implements ControlValueAccessor {

  public onChange : (value) => void;

  public onTouched : () => void;

  constructor(private host: MarkdownComponent) { 
  }

  public writeValue(value: any): void {
    this.host.value = value;
  }

  public registerOnChange(callback: (value: any) => void): void {
    this.onChange = callback;
  }

  public registerOnTouched(callback: () => void): void {
    this.onTouched = callback;
  }
}