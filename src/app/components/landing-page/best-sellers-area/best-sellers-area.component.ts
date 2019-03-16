import { Component, OnInit } from '@angular/core';
import { Vendor } from 'src/app/model/vendor';
import { TopVendorsService } from 'src/app/services/top-vendors.service';
import { VendorService } from 'src/app/services/vendor.service';
import { TopVendor } from 'src/app/model/topVendor';
import { AppConfig } from 'src/app/config/app.config';
import { resolve } from 'dns';

@Component({
  selector: 'app-best-sellers-area',
  templateUrl: './best-sellers-area.component.html',
  styleUrls: ['./best-sellers-area.component.css']
})
export class BestSellersAreaComponent implements OnInit {

  public topVendors=[];
  public vendorsLoaded:Promise<Boolean>;
  private url=AppConfig.BASE_ENDPOINT;

  constructor(private topVendorService:TopVendorsService, private vendorService:VendorService) { }

  ngOnInit() {
    this.topVendorService.findTopVendors().subscribe((data) => {
      for(var key in data) {
        this.topVendors[key]=data[key];
        this.topVendors[key].vendor=new Vendor();
        this.findVendors(this.topVendors[key]);

        this.topVendors[key].fullStar=[];
        this.topVendors[key].halfStar=[];
        this.topVendors[key].noStar=[];
        this.findFullStarRating(this.topVendors[key]);
      }
    });
    this.vendorsLoaded=Promise.resolve(true);
  }

  public findVendors(ven) {
    this.vendorService.findVendorByVcode(ven.vcode).subscribe((data) => {
        ven.vendor=data[0];
    });
  }

  public findFullStarRating(ven) {
    const starPercentage = (ven.avgProductRatings / 5) * 100;
    var starPercentageRounded = (Math.round(starPercentage / 10) * 10)/100;
    var numStars=5*starPercentageRounded;
    for (var i=0; i<5; i++) {
      if (numStars>=1) {
        ven.fullStar.push(i);
      } else if (numStars>0) {
        ven.halfStar.push(i);
      } else {
        ven.noStar.push(i);
      }
      --numStars;
    }
  }
}
