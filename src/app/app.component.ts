import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  public title = 'Heroes Inventory';

  public ngOnInit(): void {
  }
}