import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  public urlImage = '';
  public titleColor = '';
  public textColor = '';

  constructor() { }

  ngOnInit(): void {
    this.urlImage = 'assets/nepal.jpg';
    this.textColor = 'text-gray-800';
    this.titleColor = 'text-black';
  }

}
