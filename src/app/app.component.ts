import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
highcharts: any;
chartOptions: any;
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
