
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-errors',
  templateUrl: "./errors.component.html",
})
export class ErrorsComponent implements OnInit, OnChanges {

  @Input()
  public form: FormGroup;

  public get errors() {
    return this.parse(this.form);
  }

  constructor() {
  }

  public ngOnInit(): void {
  }

  public ngOnChanges(changes: SimpleChanges): void {
  }

  private parse(form: FormGroup) {
    if (!form)
      return null;

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
}

