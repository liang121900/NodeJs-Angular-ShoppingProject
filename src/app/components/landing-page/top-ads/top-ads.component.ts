import { Component, OnInit } from '@angular/core';
import { AdvertisementService } from 'src/app/services/advertisement.service';
import { Advertisement } from 'src/app/model/advertisement';

@Component({
  selector: 'app-top-ads',
  templateUrl: './top-ads.component.html',
  styleUrls: ['./top-ads.component.css']
})
export class TopAdsComponent implements OnInit {
  public ads:Advertisement[]=[];
  public selectedAds:Advertisement[]=[];
  constructor(private advertisementService:AdvertisementService) { }

  ngOnInit() {
    this.advertisementService.findAll().subscribe(ads=>{
      this.ads=ads;

      let map=new Map();
      //pick three different ads randomly
      while(map.size<3){
        let r=Math.floor(Math.random()*this.ads.length);
        map.set(this.ads[r].adId,this.ads[r]);
      }
      this.selectedAds=Array.from(map.values());
    });
  }

}
