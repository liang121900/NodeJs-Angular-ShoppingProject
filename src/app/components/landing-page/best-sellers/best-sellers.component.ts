import { Component, OnInit } from '@angular/core';
import { BestsellerService } from 'src/app/services/bestseller.service';
import { AppConfig } from 'src/app/config/app.config';


@Component({
  selector: 'app-best-sellers',
  templateUrl: './best-sellers.component.html',
  styleUrls: ['./best-sellers.component.css']
})
export class BestSellersComponent implements OnInit {
  public bestsellerProduct:[]=[];
  public baseURI:String="";
  fillstar:number[] = [3,3,3];
  emptystar:number[] = [3,3];
  constructor(private bestsellerService:BestsellerService) { }

  ngOnInit() {
    this.bestsellerService.getbestsellerProduct().subscribe((data)=>{
      for(var key in data){
        this.bestsellerProduct[key]=data[key];
      }
      this.baseURI=AppConfig.BASE_ENDPOINT;
    });
    
  }
  setRatings(ratings:number):void{
    this.fillstar = Array(ratings).fill(ratings);
    if(ratings < 5){
      this.emptystar = Array(5-ratings).fill(5-ratings);
    }
    
  }
}
