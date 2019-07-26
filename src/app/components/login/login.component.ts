import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user;
  pass;
  constructor(private ds:DataService) { }

  ngOnInit() {
    this.user='';
    this.pass='';
  }
clicked(){
  // this.get
  this.ds.getData(this.user,this.pass);
}
}
