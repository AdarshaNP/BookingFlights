import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { flight } from '../../shared/models/flightmodel';
import { flightService } from '../../shared/services/flight.service';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css'],

})
export class FlightComponent implements OnInit {


  searchFlightDetails:any = {};
  flightDetails:flight;

  constructor(private _flightService:flightService , private _router:Router,private activateRouter:ActivatedRoute) { }

  ngOnInit(): void {

  }

  flightDetailsData = [];
  searchFlight(flightDetails:any){
    console.log("flight Details",flightDetails);
    this.flightDetails = flightDetails;
    this._flightService.getFlights(this.flightDetails).subscribe((response)=>{
      this.flightDetailsData = response;
      console.log(response);
    })
  }

  TotalAmount = 0;
  flightWayMode = "";
  evtSelectItem(bflight){
   if(!bflight.isSelected){
    this.TotalAmount += bflight.price;
   }
   else{
     this.TotalAmount -=bflight.price;
   }
  console.log(this.TotalAmount);
  }

  ContinueBooking(){
     this._router.navigate(['Bookings'],{relativeTo:this.activateRouter});
     let flights = this.flightDetailsData.filter(x=>x.isSelected === true);
     let FlightIDs = [];
     flights.map(x=>FlightIDs.push(x.flightNumber));
     localStorage.setItem("FlightIds", JSON.stringify(FlightIDs));
     
  }






}
