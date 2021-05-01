import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public currentView: number | undefined;
  title = 'RapData-Ui';

  constructor() {}

  ngOnInit(): void {
    this.currentView = 1;
  }

  public goTo(nextView: number): void{
    this.currentView = nextView;
    console.log(this.currentView);
  }
}
