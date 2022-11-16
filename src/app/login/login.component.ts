import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

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
  constructor(private router:Router,private ds:DataService) { } //1st execution //dependency injection

  ngOnInit(): void { //2nd execution - it is a life cycle hooks of angular
    //initial process of component
  }

  //userdefined functions //4th execution

  // acnoChange(event:any){
  //   this.acno=(event.target.value);
  //   console.log(this.acno);
  // }

  // pswdChange(event:any){
  //   this.pswd=(event.target.value);
  //   console.log(this.pswd);
  // }

  logIn(){
    //alert("login clicked");

    var acno=this.acno;
    var pswd=this.pswd;

    const result=this.ds.login(acno,pswd);
    if(result){
     alert("login successfull");
     this.router.navigateByUrl('dashboard');
  }
  else{
    alert("login failed");
  }

  }
//  logIn(a:any,p:any){
//   //alert("login clicked");

//   var acno=a.value;
//   var pswd=p.value;
//   var userDetails=this.userDetails;

//   if(acno in this.userDetails){
//     if(pswd==userDetails[acno]['password']){
//       alert('login success')
//     }else{
//       alert('incorrect password')
//     }

//   }
//   else{
//     alert('User not found')
//   }
// }
}


