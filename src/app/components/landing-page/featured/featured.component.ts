import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { AppConfig } from 'src/app/config/app.config';
import {FeaturedService} from 'src/app/services/featured.service';
import {ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {
  fillstar:number[] = [3,3,3];
  emptystar:number[] = [3,3];
  public featuredProduct:[]=[];
  public baseURI:String="";
  constructor(private route:ActivatedRoute,private featuredService:FeaturedService) { }

  ngOnInit() {
    
      this.featuredService.getfeaturedProduct().subscribe((data)=>{
        for (var key in data) {
          this.featuredProduct[key]=data[key];
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
