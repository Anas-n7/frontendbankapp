import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit { //3rd execcution
  //properties and methods/functions

  aim="Your perfect banking partner"

  account="Enter your ACNO here"

  acno="";  //properties
  pswd="";
  userDetails:any ={  //object of object
    1000:{acno:1000,username:'Anas',password:1000,balance:10000},
    1001:{acno:1001,username:'Ali',password:1001,balance:10000},
    1002:{acno:1002,username:'Ronaldo',password:1002,balance:10000}
  }
  constructor() { } //1st execution

  ngOnInit(): void { //2nd execution - it is a life cycle hooks of angular
    //initial process of component
  }

  //userdefined functions //4th execution

  acnoChange(event:any){
    this.acno=(event.target.value);
    console.log(this.acno);
  }

  pswdChange(event:any){
    this.pswd=(event.target.value);
    console.log(this.pswd);
  }

  logIn(){
    //alert("login clicked");

    var acno=this.acno;
    var pswd=this.pswd;
    var userDetails=this.userDetails;

    if(acno in this.userDetails){
      if(pswd==userDetails[acno]['password']){
        alert('login success')
      }else{
        alert('incorrect password')
      }

    }
    else{
      alert('User not found')
    }
  }
}
