import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators as Custom } from '../shared/validators/custom.validators';

export interface Company {
  id: number,
  name: string,
  description: string,
  tags: string[],
  stars: number,
  rated: boolean,
}

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
})
export class TempComponent implements OnInit {

  public title = 'Heroes Inventory';
  public form: FormGroup;
  public company: Company;

  constructor(private builder: FormBuilder) {
    this.company = {
      id: 101,
      name: "Greek Heroes",
      description: "*badass* **heros**",
      tags: ["immortals", "mortals"],
      stars: 3,
      rated: false,
    };
  }

  public ngOnInit(): void {
    this.form = this.builder.group({
      name: [this.company.name, Validators.required],
      description: [this.company.description, Validators.required],
      stars: [this.company.stars, Custom.notlow],
      tags: [this.company.tags, Custom.notempty],
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

  public log(event: any) {
    console.log(event);
  }
}