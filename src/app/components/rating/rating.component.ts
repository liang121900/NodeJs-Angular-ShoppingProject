import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input("rating")
  rating:number;
  fillStar:number[];
  emptyStar:number[];
  halfStar:boolean=false;
  constructor(private productService:ProductService){
  }

  ngOnInit() {
    if(!this.rating){
      this.rating = 0;
    }


    
    if(this.rating > 0){
      this.fillStar = new Array(this.rating - (this.rating % 1)).fill(this.rating);
    }
    if(this.rating < 5){
      if(this.rating%1 >= 0.5){
        this.halfStar = true;
        var nstar = 4 - ((this.rating - (this.rating % 1)));
        
        if(nstar > 0){
          this.emptyStar = new Array(nstar).fill(this.rating);
        }
      }else{
        this.emptyStar = new Array(5 - (this.rating - (this.rating % 1))).fill(this.rating);
      }
    }
  }
}
