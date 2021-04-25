import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';

import { MustMatch } from '../utils/validators';
import {ServerService} from '../services/server.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  loginForm = this.formBuilder.group({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    pseudo: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    confirm_password: new FormControl('', [
      Validators.required,
    ])
  }, {
    validator: MustMatch('password', 'confirm_password')
  });

  isSubmitted = false;
  isSend = false;

  constructor(private formBuilder: FormBuilder,
              private serverService: ServerService) {}

  ngOnInit(): void {
  }

  onSubmit(): void{
    this.isSubmitted = true;
    if (this.loginForm.valid) {
      this.serverService.register(
        this.loginForm.value.email,
        this.loginForm.value.pseudo,
        this.loginForm.value.password
      ).subscribe(
        res => {
          this.loginForm.reset();
          this.isSend = true;
        },
        err => {
          if (err.status === 418){
            console.log('pseudo already used');
          }
        });
    }
  }

}
