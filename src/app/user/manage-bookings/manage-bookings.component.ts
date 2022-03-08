import { AfterViewInit, Component, OnInit } from '@angular/core';
import { flightService } from 'src/app/shared/services/flight.service';

@Component({
  selector: 'app-manage-bookings',
  templateUrl: './manage-bookings.component.html',
  styleUrls: ['./manage-bookings.component.css']
})
export class ManageBookingsComponent implements OnInit, AfterViewInit {

  constructor(private flightservice: flightService) {
    this.flightIds = JSON.parse(localStorage.getItem("FlightIds"));
    this.flightservice.getUserManageBookings(this.flightIds).subscribe(response => {
      //setTimeout(() => {
        this.ManagedBookigFlights = response;
        console.log(this.ManagedBookigFlights);
      //}, 2000);
    })
  }

  ManagedBookigFlights = [];
  flightIds = [];
  ngOnInit(): void {
    // this.flightservice.manageBookingObservable.subscribe((flightIDs) => {
    //   let flightIds = flightIDs;
    //   this.flightservice.getUserManageBookings(flightIds).subscribe(response => {
    //     setTimeout(() => {
    //       this.ManagedBookigFlights = response;
    //       console.log(this.ManagedBookigFlights);
    //     }, 2000)
    //   })
    // })
  }

  ngAfterViewInit(): void {
    // this.flightservice.manageBookingObservable.subscribe((flightIDs) => {
    //   let flightIds = flightIDs;
    //   this.flightservice.getUserManageBookings(flightIds).subscribe(response => {
    //     setTimeout(() => {
    //       this.ManagedBookigFlights = response;
    //       console.log(this.ManagedBookigFlights);
    //     }, 2000)
    //   })
    // })
  }

}
