import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  //login acno hold
  acno:any;
  //transaction hold
  transaction:any;

  constructor(private ds:DataService) { 
    this.acno=this.ds.currentAcno;
    this.transaction=this.ds.getTransaction(this.acno);
    console.log(this.transaction);
  }

  ngOnInit(): void {
  }

}
