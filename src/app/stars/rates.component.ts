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

  public ratings: boolean[];
  
  public rating: number;

  public onChange : (rating: number) => void;

  public onTouched : () => void;

  constructor() {
    this.ratings = Array(5).fill(false);
  }

  public ngOnInit(): void {
  }

  public writeValue(rating: number): void {
    this.rate(rating);
  }

  public registerOnTouched(callback: () => void): void {
    this.onTouched = callback;
  }

  public registerOnChange(callback: (rating: number) => void): void {
    this.onChange = callback;
  }

  public setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }

  public click(index: number) {
    this.rate(index + 1);
    this.onChange(index+1);
  }

  private rate(rating: number) {
    //this.onTouched();
    if (this.disabled)
      return;
    this.ratings = this.ratings.map((current, index) => {
      return index < rating
    });
    this.disabled = rating < 2;
    //this.onChange(rating);
  }
}
