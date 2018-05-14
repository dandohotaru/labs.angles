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

  public ratings: boolean[];

  public rating: number;

  public touch: () => void;

  public change: (rating: number) => void;
  
  constructor() {
    this.ratings = Array(5).fill(false);
  }

  public ngOnInit(): void {
  }

  public writeValue(rating: number): void {
    this.rating = rating;
    this.refresh();
  }

  public registerOnTouched(callback: () => void): void {
    this.touch = callback;
  }

  public registerOnChange(callback: (rating: number) => void): void {
    this.change = callback;
  }

  public click(index: number) {
    this.touch();

    let rating = index + 1;
    this.rating = rating;

    this.refresh();
    this.change(rating);
  }

  public refresh() {
    this.ratings = this.ratings.map((current, index) => {
      return index < this.rating;
    });
  }

  
}
