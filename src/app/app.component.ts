import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public currentView: number | undefined;
  title = 'RapData-Ui';

  ngOnInit(): void {
    this.currentView = 3;
  }

  // tslint:disable-next-line:typedef
  public goTo(nextView: number){
    this.currentView = nextView;
  }
}
