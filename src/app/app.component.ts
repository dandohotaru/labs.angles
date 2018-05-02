import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

export interface Company {
  id: number,
  name: string,
  tags: string[],
  stars: number,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {

  public title = 'Heroes Inventory';
  public form: FormGroup;
  public company: Company;

  constructor(private builder: FormBuilder) {
    this.company = {
      id: 101,
      name: "Greek Heroes",
      tags: ["immortals", "mortals"],
      stars: 3
    };
  }

  public ngOnInit(): void {

    let empty = (control)=>{
      return control.value == null || control.value.length === 0
          ? { empty: true }
          : null;
    };

    this.form = this.builder.group({
      name: [this.company.name, Validators.required],
      stars: [this.company.stars],
      tags: [this.company.tags, empty],
      others: [[], empty],
    });
  }

  public submit(form: FormGroup) {
    let payload = {
      valid: form.valid,
      status: form.status,
      value: form.value,
    };
    console.log(payload);
  }
}