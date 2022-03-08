import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FlightComponent } from './user/flight/flight.component';
import { BookingHistoryComponent } from './user/booking-history/booking-history.component';
import { DiscountComponent } from './admin/discount/discount.component';
import { ManageAirlinesComponent } from './admin/manage-airlines/manage-airlines.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ManageBookingsComponent } from './user/manage-bookings/manage-bookings.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ReportsComponent } from './admin/reports/reports.component';
import { ManageSchedulesComponent } from './admin/manage-schedules/manage-schedules.component';



const appRoutes:Routes = [

  {path:"", component: FlightComponent},
  {path:"Login" , component:LoginComponent},
  {path: "admin", component : AdminComponent,
  children:[
    {'path':'',component:ManageSchedulesComponent},
    {'path':'Discounts',component:DiscountComponent},
    {'path':'AirLines',component:ManageAirlinesComponent},
    {'path':'Reports',component:ReportsComponent}
  ]
},
  {path:'user',component:UserComponent ,
    children:[
    {'path':'',component:FlightComponent},
    {'path':'Bookings',component:ManageBookingsComponent},
    {'path':'History',component:BookingHistoryComponent}
  ],
},
{path:"**",redirectTo:""}];

@NgModule({
  declarations: [
    AppComponent,
    FlightComponent,
    BookingHistoryComponent,
    DiscountComponent,
    ManageAirlinesComponent,
    ManageBookingsComponent,
    UserComponent,
    LoginComponent,
    AdminComponent,
    ManageSchedulesComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
