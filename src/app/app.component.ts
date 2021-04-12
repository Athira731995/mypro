import { Component, OnInit } from '@angular/core';
import { from, fromEvent, of,interval } from 'rxjs';
import {throttleTime,map, filter,scan,take,catchError,delay,retry} from 'rxjs/operators'
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
getData(event:any){
  console.log("input event triggered....",event)
  let data=event.target.value
  console.log(data)

}
  

}
