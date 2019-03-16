import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Review } from 'src/app/model/review';
import { AppConfig } from 'src/app/config/app.config';

@Component({
  selector: 'app-shop-review',
  templateUrl: './shop-review.component.html',
  styleUrls: ['./shop-review.component.css']
})

export class ShopReviewComponent implements OnInit {

  public reviewList:Review[] = [];  

  public url = AppConfig.BASE_ENDPOINT;   

  constructor(private productService:ProductService) { }

  ngOnInit() {

    var maxReviews = 3;
    var reviewsGotten = 0;

    this.productService.getAllReviews().subscribe(data =>{
      var arrayOfReviews:Review[] = data;
      var reviewItem:Review;

      arrayOfReviews.forEach( (p) => {

        reviewItem = new Review();
      
        //console.log("p:");
        //console.log(p);
        //console.log("stringify p:");
        //console.log(JSON.stringify(p));

        this.productService.getProductByPid(p.pid).subscribe(data =>{

          if(data && data[0]){
            //console.log(data[0]);

            // model - entity discrepency
            // make all keys lowercase for new object
            var key, keys = Object.keys(data[0]);
            var n = keys.length;
            var newobj = <any>{}; // fix property does not exist on type
            while (n--) {
              key = keys[n];
              newobj[key.toLowerCase()] = data[0][key];
            }


            p.title = data[0].title;
            p.imageUrl = newobj.imageurl; // why imageURL one place, imageUrl another ??!!!


            reviewItem = p;


            reviewsGotten++;
    
            if(reviewsGotten <= maxReviews){
              // push review into the reviewList
              this.reviewList.push(reviewItem);
            }
            
          }else{
            console.log("getProductByPid fail");
          }
        });


      });


    });
  }

  getReviews(){

    var maxReviews = 1;
    var reviewsGotten = 0;

    this.productService.getAllReviews().subscribe(data =>{

      var arrayOfReviews:Review[] = data;
      var reviewItem:Review;

      arrayOfReviews.forEach( (p) => {

        reviewItem = new Review();
      
        //console.log("p:");
        //console.log(p);
        //console.log("stringify p:");
        //console.log(JSON.stringify(p));

        this.productService.getProductByPid(p.pid).subscribe(data =>{

          if(data && data[0]){
            console.log("product:");
            //console.log(data[0]);

            // model - entity discrepency
            // make all keys lowercase for new object
            var key, keys = Object.keys(data[0]);
            var n = keys.length;
            var newobj = <any>{}; // fix property does not exist on type
            while (n--) {
              key = keys[n];
              newobj[key.toLowerCase()] = data[0][key];
            }

            console.log(newobj);

            p.title = data[0].title;
            p.imageUrl = newobj.imageurl; // why imageURL one place, imageUrl another ??!!!


            reviewItem = p;

            console.log("review item:");
            console.log(reviewItem);

            reviewsGotten++;
            console.log("Reviews gotten: " + reviewsGotten);
    
            if(reviewsGotten <= maxReviews){
              // push review into the reviewList
              this.reviewList.push(reviewItem);
            }
            
          }else{
            console.log("getProductByPid fail");
          }
        });


      });


    });

  }

}
