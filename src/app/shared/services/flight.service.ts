import { HttpClient } from "@angular/common/http";
import { ThrowStmt } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { Observable,of  } from "rxjs";
import { EventEmitter } from "@angular/core";
import { flight } from "../models/flightmodel";


@Injectable({'providedIn':"root"})
export class flightService{

    dummyflightDetails = [{
      fromPlace:'Bangolore',
      toPlace : 'chennai',
      startDateTime: '12/3/2022',
      endDateTime : '15/3/2022',
      flightLogo : "https://wallpapercave.com/wp/wp6767658.jpg",
      price   : 2100,
      flightNumber : 'A123',
      isSelected : false,
      businessClassSeatsCount : 3,
      AirLineName: 'Indigo'
   },
   {
      fromPlace:'Bangolore',
      toPlace : 'hyderabad',
      startDateTime: '13/3/2022',
      endDateTime : '15/3/2022',
      flightLogo : "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/01/28/1017217-1016586-air-india.jpg",
      price   : 2700,
      flightNumber : 'B123',
      isSelected : false,
      businessClassSeatsCount : 2,
      AirLineName: 'AirIndia'
   },
   {
      fromPlace:'Bangolore',
      toPlace : 'chennai',
      startDateTime: '13/3/2022',
      endDateTime : '16/3/2022',
      flightLogo : "https://wallpapercave.com/wp/wp6767658.jpg",
      price   : 2900,
      flightNumber : 'C123',
      isSelected : false,
      businessClassSeatsCount : 4,
      AirLineName: 'Indigo'
   },
   {
      fromPlace:'Bangolore',
      toPlace : 'hyderabad',
      startDateTime: '20/3/2022',
      endDateTime : '25/3/2022',
      flightLogo : "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/01/28/1017217-1016586-air-india.jpg",
      price   : 30000,
      flightNumber : 'D123',
      isSelected : false,
      businessClassSeatsCount : 1,
      AirLineName: 'AirIndia'
  },
  ]

   manageBookingObservable = new EventEmitter<any>();

    constructor(private _http:HttpClient){
    }

    
    getFlights(flightDetails:flight) : Observable<any>{
         return this._http.post("localhost:8086/api/getflight",flightDetails);
    }

    getUserManageBookings(flights) : Observable<any>{
      
      let BookingFlights = [];

      // let FlightIDs = [];
      // flights.map(x=>FlightIDs.push(x.flightNumber));
      // //console.log(a);

      flights.forEach((value)=>{
           let flight = this.dummyflightDetails.filter(
              (x)=>x.flightNumber == value)[0];
           BookingFlights.push(flight);
      })
      return of(BookingFlights);
      //return this._http.get("_____", flightIds);
    }

    CancelBooking(flight){
      //return this._http.post("_____", flightIds);
    }

    getUserBookingHistory() : Observable<any>{
       return of(this.dummyflightDetails);
    }

}