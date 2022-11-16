import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  uname="";
  acno="";
  pswd="";
  //registermodel
  registerForm=this.fb.group({  //group
    uname:[''],  //array
    acno:[''],
    pswd:['']
  })
  //control - goes to register.component.html
  constructor(private fb:FormBuilder,private ds:DataService,private router:Router) { }
 //form builder- it is a class and it contains group,array and control - ReactiveFormsModule
  ngOnInit(): void {
  }

  register(){
   // alert("clicked")
   var uname=this.registerForm.value.uname;
   var acno=this.registerForm.value.acno;
   var pswd=this.registerForm.value.pswd;

   //var userDetails=this.ds.userDetails;
   const result=this.ds.register(acno,uname,pswd);

   if(result){
    alert("successfully registered");
    this.router.navigateByUrl('');
   }
   else{
    alert("failed to register");
   }
  }

}
