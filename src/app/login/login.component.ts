import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  userName = "";
  password = "";

  Login(userName,password){
    if(userName == "user"){
     this.router.navigate(["user"])
    }
    if(userName == "Admin"){
      this.router.navigate(["admin"])
    }
  }

}
