import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { element } from 'protractor';

const httpOptions={
  headers: new HttpHeaders({
    'Content-type':'application/json',
    'Access-Control-Allow-Origin':'*'
  })
};
@Injectable({
  providedIn: 'root'
})
export class DataService {

  URL="http://localhost:3000/userdata.json";  
  userdata=JSON.parse(JSON.stringify(this.http.get(this.URL,httpOptions)));
  constructor(private http:HttpClient) { 

  }
  getData(name,password){
    
    console.log(this.userdata);
    // userdata.forEach(element=>{
    //   if(element.username===name && element.password===password){
    //     alert('success');
    //   }
    //   else{
    //     alert('failure');
    //   }
    // });
    for(let i in this.userdata)
    {
      
      if((this.userdata[i].name===name && this.userdata[i].password===password))
      {
        alert('Succes');
      }
      else
      {
        console.log(this.userdata[i]);
        alert('Failure');
      }
    }
  }
}
