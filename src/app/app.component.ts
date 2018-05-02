import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

export interface Company {
  id: number,
  name: string,
  tags: string[],
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
    };
  }

  public ngOnInit(): void {
    this.form = this.builder.group({
      name: ['', Validators.required],
      tags: ['', (control) => {
        return control.value == null || control.value.length === 0
          ? { empty: true }
          : null
      }]
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