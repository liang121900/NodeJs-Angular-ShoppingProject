import { Component, OnInit } from '@angular/core';
import { OfferaddService } from 'src/app/services/offeradd.service';
import { promise } from 'protractor';

import { AppConfig } from 'src/app/config/app.config';
 

@Component({
  selector: 'app-offersadd',
  templateUrl: './offersadd.component.html',
  styleUrls: ['./offersadd.component.css']
})
export class OffersaddComponent implements OnInit {
  //private status:boolean=true;
  //private offerdetails:Offeradd;
  private offerAdd:[]=[];
  public baseURI:String="";
  constructor(private offeraddService:OfferaddService) { }

  ngOnInit() {
    this.offeraddService.getofferAdd().subscribe((data)=>{
      for(var key in data){
        this.offerAdd[key]=data[key];
      }
      this.baseURI=AppConfig.BASE_ENDPOINT;
    });
  }

}
