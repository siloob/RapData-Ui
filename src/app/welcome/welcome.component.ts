import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  public urlImage = '';
  public textColor = '';

  constructor() { }

  ngOnInit(): void {
    this.urlImage = 'assets/nepal.jpg';
    this.textColor = 'text-gray-800';
  }

}
