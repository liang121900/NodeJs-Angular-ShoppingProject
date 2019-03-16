import { Component, OnInit } from '@angular/core';
import { Vendor } from 'src/app/model/vendor';
import { VendorService } from 'src/app/services/vendor.service';

@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.css']
})
export class AddVendorComponent implements OnInit {

  public selectedFile: File;
  public vendor:Vendor=new Vendor();
  public message:String=""; 
  public imageShow;
  constructor(private vendorService:VendorService) { }

  ngOnInit() {
  }

  public onFileChanged(event) : void {
    this.selectedFile = event.target.files[0];
    
    //Below Code for image preview only ...this is not mandetory !!!
     var reader = new FileReader();
     reader.readAsDataURL(event.target.files[0]);
     reader.onload = (event) => {
                       // reading selected image 
      this.imageShow = (<FileReader>event.target).result;
      //this.imageShow = URL of the image
  }   
    
    
    
   // this.vendor.image=this.selectedFile;
  }

  public addVendor(){
     this.vendorService.addVendor(this.vendor,this.selectedFile).subscribe(data =>{
        this.message="Vendor is uploaded!";
        //creating new object so that we can reset the data
        this.vendor=new Vendor();
        this.selectedFile=null;
     });
  }

}
