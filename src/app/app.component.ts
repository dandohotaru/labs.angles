import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators as Custom } from './shared/validators/custom.validators';

export interface Company {
  id: number,
  name: string,
  tags: string[],
  stars: number,
  rated: boolean,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
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
      stars: 3,
      rated: false,
    };
  }

  public ngOnInit(): void {
    this.form = this.builder.group({
      name: [this.company.name, Validators.required],
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

  public get errors() {
    return errors(this.form);
  }
}

export function errors(form: FormGroup) {
  return Object
    .keys(form.controls)
    .reduce((results: { context: string, key: string, value: any }[], current: string) => {

      let errors = form.get(current).errors;
      if (errors) {
        let found = Object
          .keys(errors)
          .map(key => ({
            context: current,
            key: key,
            value: errors[key],
          }));
        results.push(...found);
      };

      return results;
    }, []);
}