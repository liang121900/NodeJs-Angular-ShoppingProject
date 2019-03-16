import { Component, OnInit,EventEmitter } from '@angular/core';
import {SearchService} from 'src/app/services/search.service';
import { AppConfig } from 'src/app/config/app.config';
import { ActivatedRoute } from '@angular/router';
import { Search } from 'src/app/model/search';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public searchProduct:Search[]=[];
  public bsearchProduct:Search[]=[];
  //public searchProduct:[]=[];
  //filterProduct:Search[];
  public baseURI:String="";
  private sortingMethod="";
  
  private selectedCategory="";
  search:Search[];
  sortType:string;
  sortReverse:boolean=false;
 
  constructor(private searchService:SearchService,private route:ActivatedRoute) { 
     
  }
   

  //GETTING DATA FROM DATABASE
  ngOnInit() {
    this.searchService.getsearchProduct().subscribe((search)=>{
    
     // console.log(search);
      this.searchProduct=search;
      this.bsearchProduct=search;
    });

  }

dynamicSort(smethod){
    if(smethod=="Asc"){
      
      this.searchProduct.sort(function(product1:Search, product2:Search){  
        let comparison = 0;  
        if(product1.sprice > product2.sprice){  
        comparison = -1;  
        }else if(product1.sprice < product2.sprice){  
        comparison = 1;  
        }  
        return comparison;  
        }
      );
    }else{
      this.searchProduct.sort(function(product1:Search, product2:Search){  
        let comparison = 0;  
        if(product1.sprice < product2.sprice){  
        comparison = -1;  
        }else if(product1.sprice > product2.sprice){  
        comparison = 1;  
        }  
        return comparison;  
        }
      );
    }

}

  
getSortOrders(){
  this.dynamicSort(this.sortingMethod);
  }



  filterProductsByCategory(filterval:any){
    if(filterval.value==""){
      this.searchProduct=this.bsearchProduct;
       
      }else{
      this.searchProduct=this.bsearchProduct;
    
      this.searchProduct=this.searchProduct.filter((t:Search)=>t.category==filterval.value);
   }
  }
  }   
 