import { Component, OnInit, Input } from '@angular/core';
import { forwardRef, HostBinding } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const RatesProvider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RatesComponent),
  multi: true
}

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.css'],
  providers: [RatesProvider],
})
export class RatesComponent implements ControlValueAccessor, OnInit {

  @Input("lock")
  public disabled = false;

  @HostBinding('style.opacity')
  get opacity() {
    return this.disabled ? 0.25 : 1;
  }

  public rates: boolean[] = Array(5).fill(false);

  public onChange = (rating: number) => { };

  public onTouched = () => { };

  public ngOnInit(): void {
  }

  get value(): number {
    return this.rates.reduce((result, current) => {
      return result + (current ? 1 : 0);
    }, 0);
  }

  public rate(rating: number) {
    if (!this.disabled) {
      this.writeValue(rating);
    }
  }

  public writeValue(rating: number): void {
    this.rates = this.rates.map((star, index) => rating > index);
    this.disabled = rating < 3;
    this.onChange(this.value)
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public registerOnChange(fn: (rating: number) => void): void {
    this.onChange = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  public click(star: boolean, index: number) {
    this.onTouched();
    let current = star
      ? this.value > index + 1
        ? 1
        : 0
      : 1;
    this.rate(index + current);
  }
}
