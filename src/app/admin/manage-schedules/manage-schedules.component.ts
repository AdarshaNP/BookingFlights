import { Component, OnInit } from '@angular/core';
import { flight } from 'src/app/shared/models/flightmodel';
import { AdminService } from 'src/app/shared/services/admin.service';

@Component({
  selector: 'app-manage-schedules',
  templateUrl: './manage-schedules.component.html',
  styleUrls: ['./manage-schedules.component.css']
})
export class ManageSchedulesComponent implements OnInit {

  constructor(public _adminService:AdminService) { }

  ngOnInit(): void {
  }

  sample :string = "";

  searchManagedScheduledFlight:any= {AirLineName:''};
  manageScheduleFlights = [];
  flightDetails:flight;
  

  searchflight(searchManagedScheduledFlight){
   this.flightDetails = searchManagedScheduledFlight;
    this._adminService.getScheduleSearchResults(this.flightDetails).subscribe((response)=>{
      this.manageScheduleFlights = response;
    })
  }


}
