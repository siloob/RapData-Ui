import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, NgForm, Validators} from '@angular/forms';

import { ServerService} from '../services/server.service';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
  contactForm = this.formBuilder.group({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    pseudo: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    comment: new FormControl('', [
      Validators.required,
    ])
  });

  isSubmitted = false;

  constructor(private formBuilder: FormBuilder,
              private serverService: ServerService) {}

  ngOnInit(): void {
  }

  onSubmit(): void{
    if (this.contactForm.valid) {
      this.serverService.sendMail(
        this.contactForm.value.email,
        this.contactForm.value.pseudo,
        this.contactForm.value.comment
      ).subscribe((result: number) => {
        console.log('result:' + result);
        if (result === 1){
          this.contactForm.reset();
          this.isSubmitted = true;
        }
      });
    }
  }
}

