import { Component, OnInit } from '@angular/core';
import { flightService } from 'src/app/shared/services/flight.service';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.css']
})
export class BookingHistoryComponent implements OnInit {

  constructor(private _bookingService:flightService) { }

  ngOnInit(): void {
     this._bookingService.getUserBookingHistory().subscribe((response)=>{
       this.bookingHistoryFlights = response
     })
  }

  bookingHistoryFlights = [];


}
