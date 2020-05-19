import {AbstractControl, ValidationErrors} from '@angular/forms';

/** Validates JMBG. */
export function JmbgValidator(control: AbstractControl): ValidationErrors | null {
  if (control.value && control.value.length != 13) {
    return {'invalidJmbg': 'invalidLength'};
  }
  const digits = control.value.split('');
  let checkSum = 11 - (
    (7 * ((+digits[0]) + (+digits[6]))
      + 6 * ((+digits[1]) + (+digits[7]))
      + 5 * ((+digits[2]) + (+digits[8]))
      + 4 * ((+digits[3]) + (+digits[9]))
      + 3 * ((+digits[4])+ (+digits[10]))
      + 2 * ((+digits[5]) + (+digits[11])))
    % 11);
  checkSum = checkSum > 9 ? 0 : checkSum;
  return checkSum === (+digits[12]) ? null : {'invalidJmbg': 'invalidChecksum'};
}
