import { Component, OnInit, Input } from '@angular/core';
import { Vendor } from 'src/app/model/vendor';
import { VendorService } from 'src/app/services/vendor.service';
import { Router } from '@angular/router';
import { AppConfig } from '../../../config/app.config'; // for the paths

@Component({
  selector: 'app-vendor-details',
  templateUrl: './vendor-details.component.html',
  styleUrls: ['./vendor-details.component.css']
})
export class VendorDetailsComponent implements OnInit {

  public baseURI:String="";  

  @Input("pitem")
  vendorDetails:Vendor;

  public message:String=""; 

  public isDeleted:Boolean = false;

  public isMoreClicked:Boolean = true;

  constructor(private vendorService:VendorService, private router: Router) { 

  }

  //this is a callback method define inside OnInit interface   
  ngOnInit() {

    this.baseURI=AppConfig.BASE_ENDPOINT; // set base url from config, for the image    
  }

  showMore(){
    this.isMoreClicked = ! this.isMoreClicked;
  }

  // deleteVendor(id)
  deleteVendor(id){
    alert('deleting...');


     this.vendorService.deleteVendor(id).subscribe(data =>{
        this.message="Vendor is deleted!";

        this.isDeleted = true;
     });


  }

  editVendor(id){
    

    alert('editing...');

    this.router.navigate(['edit-vendor/id/'+id]);

    /*
    this.router.navigate(['edit-vendor'], {
      queryParams: {
        newOrdNum: '123'
      }
  
    });
    */

    /*
     this.vendorService.deleteVendor(id).subscribe(data =>{
        console.log(data);
        console.log("Vendor is deleted!");
        this.message="Vendor is deleted!";

        this.isDeleted = true;
     });
     */

  }


}
