import { AfterViewInit, Component, OnInit } from '@angular/core';

import { flight } from './shared/models/flightmodel';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit , AfterViewInit{
  title = 'BookingFlights';

  public flight1:any = flight;

  constructor(){
    //console.log(this.flight1.fromPlace);
  }
  
  ngOnInit(): void {
      console.log(this.flight1.fromPlace)
  }

  ngAfterViewInit(): void {
      this.flight1.fromPlace = "madan";
      console.log(this.flight1.fromPlace);
  }
  

}

