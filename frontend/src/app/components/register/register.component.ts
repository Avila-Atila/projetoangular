import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { emailDomainValidator } from '../../utils/regex-validator';
import { passwordsMatchValidator } from '../../utils/password-validator';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerUser = new FormGroup(
    {
      email: new FormControl('', [
        Validators.required,
        emailDomainValidator('@ba.estudante.senai.br'),
      ]),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
    },
    { validators: passwordsMatchValidator },
  );

  onSubmit() {
    console.log(this.registerUser.value);
  }
}
