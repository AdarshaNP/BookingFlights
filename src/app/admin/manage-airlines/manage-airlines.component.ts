import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/services/admin.service';

@Component({
  selector: 'app-manage-airlines',
  templateUrl: './manage-airlines.component.html',
  styleUrls: ['./manage-airlines.component.css']
})
export class ManageAirlinesComponent implements OnInit {

  constructor(private httpService:HttpClient , private _adminService:AdminService) { }

  manageAirLinesList = [];
  showNewAirLine = false;
  AirLine:any = {};
  ngOnInit(): void {
    this._adminService.getAirLinesList().subscribe((response)=>{
     this.manageAirLinesList = response;
    })
  }

  evtViewDetails(AirLine){
    console.log(AirLine);
  }

  evtNewAirLine(AirLine){
    this._adminService.addNewAirLine(AirLine).subscribe((response)=>{
      if(response){
        this.manageAirLinesList.push(AirLine);
        this.showNewAirLine = false;
      }
    });

  }
}
