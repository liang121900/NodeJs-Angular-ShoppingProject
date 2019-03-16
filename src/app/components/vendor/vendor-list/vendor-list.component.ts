import { Component, OnInit } from '@angular/core';
import { Vendor } from 'src/app/model/vendor';
import { VendorService } from 'src/app/services/vendor.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {

  public vendorList:Vendor[]=[];

  constructor(private vendorService:VendorService) {
  }

  ngOnInit() {
    this.vendorService.findVendors().subscribe(vendors =>{
      this.vendorList=vendors
    });
    
    //let v1=new Vendor();
    ///v1.vcode="V02102";
    ///v1.name="ABC TECH";
   /// v1.email="abc@gmail.com";
    ///let v2=new Vendor();
    //v2.vcode="V04949";
    //v2.name="Future Tech";
    //v2.email="futuretech@gmail.com";

  
    //this.vendorList.push(v1);
    //this.vendorList.push(v2);
    //this.vendorList.push(v3);

  }

}
