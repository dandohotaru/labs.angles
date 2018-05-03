import { FormControl, ValidationErrors } from "@angular/forms";

export class CustomValidators {

  public static notempty(control: FormControl): ValidationErrors {
    return control.value == null || control.value.length == 0
      ? { empty: "Collection cannot be empty" }
      : null;
  };

  public static notlow(control: FormControl, value: number = 2): ValidationErrors {
    return control.value == null || control.value <= value
      ? { low: "Value cannot be too low" }
      : null;
  };

}


