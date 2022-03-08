import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { AirLine } from "../models/airlinemodel";
import { flight } from "../models/flightmodel";

@Injectable({ providedIn: "root" })
export class AdminService {

    constructor(public _httpService:HttpClient){

    }

    dummyflightDetails = [{
        fromPlace: 'Bangolore',
        toPlace: 'chennai',
        startDateTime: '12/3/2022',
        endDateTime: '15/3/2022',
        flightLogo: "https://wallpapercave.com/wp/wp6767658.jpg",
        price: 2100,
        flightNumber: 'A123',
        isSelected: false,
        businessClassSeatsCount: 3,
        instrumentUsed: "abc",
        AirLineName: "Indigo"
    },
    {
        fromPlace: 'Bangolore',
        toPlace: 'hyderabad',
        startDateTime: '13/3/2022',
        endDateTime: '15/3/2022',
        flightLogo: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/01/28/1017217-1016586-air-india.jpg",
        price: 2700,
        flightNumber: 'B123',
        isSelected: false,
        businessClassSeatsCount: 2,
        instrumentUsed: "ced",
        AirLineName: "AirIndia"
    },
    {
        fromPlace: 'Bangolore',
        toPlace: 'chennai',
        startDateTime: '13/3/2022',
        endDateTime: '16/3/2022',
        flightLogo: "https://wallpapercave.com/wp/wp6767658.jpg",
        price: 2900,
        flightNumber: 'C123',
        isSelected: false,
        businessClassSeatsCount: 4,
        instrumentUsed: "def",
        AirLineName: "Indigo"
    },
    {
        fromPlace: 'Bangolore',
        toPlace: 'hyderabad',
        startDateTime: '20/3/2022',
        endDateTime: '25/3/2022',
        flightLogo: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/01/28/1017217-1016586-air-india.jpg",
        price: 30000,
        flightNumber: 'D123',
        isSelected: false,
        businessClassSeatsCount: 1,
        instrumentUsed: "ced",
        AirLineName: "AirIndia"
    },
    ]

    dummyAirLinesDetails = [{
        Logo: "Logo",
        AirLineName: "Indigo",
        airlineNumber: "",
        contactNumber: 21344556,
        breifWriteUp: "Started form hyderabad",
        contactAddress: ""
    },
    {
        Logo: "Logo",
        AirLineName: "AirIndia",
        airlineNumber: "",
        contactNumber: 234213143,
        breifWriteUp: "Started from Mumbai",
        contactAddress: ""
    },
    {
        Logo: "Logo",
        AirLineName: "Indigo",
        airlineNumber: "",
        contactNumber: 252453252,
        breifWriteUp: "Started from Bangolore",
        contactAddress: ""
    },
    {
        Logo: "Logo",
        AirLineName: "AirIndia",
        airlineNumber: "",
        contactNumber: 3343453253,
        breifWriteUp: "Started from Chennai",
        contactAddress: ""
    }]

    //Here we need to call api based on the AirLineName , Number and instrumentUsed
    getScheduleSearchResults(flight: flight): Observable<any> {
        let scheduledflightDetails = this.dummyflightDetails.filter((x) =>
            x.AirLineName == flight.AirLineName &&
            x.flightNumber == flight.flightNumber &&
            x.instrumentUsed == flight.instrumentUsed
        )
        return of(scheduledflightDetails);
    }

    //Get allAirLines List
    getAirLinesList() : Observable<any>{
        
        return of(this.dummyAirLinesDetails);
        //this._httpService.get('getAllAirLines');

    }

    // Add the AirLine details to the api
    addNewAirLine(airLine:AirLine) : Observable<boolean>{
         console.log(airLine);

         return of(true);
         //this._httpService.post("_____",airLine)
    }


}