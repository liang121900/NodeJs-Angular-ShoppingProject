import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html'
})
export class UserDashboardComponent implements OnInit {
  private notifications: boolean;
  private profile: boolean;
  private totalOrders: boolean;
  private currentOrders: boolean;
  constructor() { }

  ngOnInit() {
    this.notifications = false;
    this.profile = false;
    this.totalOrders = false;
    this.currentOrders = true;
  }

  public toggleOrder(){
    if(this.currentOrders==false){
      this.currentOrders=true;
    }else{
      this.currentOrders=false;
    }
    this.profile = false;
    this.notifications = false;
  }
  public toggleProfile(){
    if(this.profile==false){
      this.profile=true;
    }else{
      this.profile=false;
    }
    this.currentOrders = false;
    this.notifications = false;
  }
  public toggleNotification(){
    if(this.notifications==false){
      this.notifications=true;
    }else{
      this.notifications=false;
    }
    this.currentOrders = false;
    this.profile = false;
  }
}
