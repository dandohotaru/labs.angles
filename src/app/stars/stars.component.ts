import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  public stars: boolean[] = Array(5).fill(false);

  public ngOnInit(): void {
  }

  get value(): number {
    return this.stars.reduce((result, current) => {
      return result + (current ? 1 : 0);
    }, 0);
  }

  public rate(rating: number) {
    this.stars = this.stars.map((_, i) => rating > i);
  }

  public click(starred, i) {
    this.rate(i + (starred ? (this.value > i + 1 ? 1 : 0) : 1))
  }
}
