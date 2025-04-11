import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class RegexValidator {}

export function emailDomainValidator(requiredDomain: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value || typeof control.value !== 'string') {
      return null;
    }

    const domainRegex = new RegExp(
      `${requiredDomain.replace(/\./g, '\\.')}$`,
      'i',
    );

    const valid = domainRegex.test(control.value);

    return valid
      ? null
      : { emailDomain: { value: control.value, requiredDomain } };
  };
}
