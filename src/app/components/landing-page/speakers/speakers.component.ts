import { Component, OnInit } from '@angular/core';
import { Advertisement } from 'src/app/model/advertisement';
import { AdvertisementService } from 'src/app/services/advertisement.service';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.css']
})
export class SpeakersComponent implements OnInit {

  private adDetials:Advertisement;
  private adLoaded:Promise<Boolean>;

  constructor(private advertisementService:AdvertisementService) {
    this.advertisementService.findAdById("A123").subscribe(data=>{
      this.adDetials=data;
      this.adLoaded=Promise.resolve(true);
    });
  }

  ngOnInit() {
    
  }

}
