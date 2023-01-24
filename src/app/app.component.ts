import { Component } from '@angular/core';
import { subscribe } from 'graphql';
import {GetApiService} from './get-api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'call api in angular';
  constructor( private api:GetApiService ){

  }

  ngOnInit()
  {
    this.api.apiCall().subscribe((data)=>{
      console.log("get api data",data);
    })
  }
}
