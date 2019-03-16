import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/model/product';
import { TechSpec } from 'src/app/model/techSpec';
import { Vendor } from 'src/app/model/vendor';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.techSpec = new TechSpec();
  }

  public product:Product = new Product();
  public selectedFile:File;
  //public imageShow;
  public techSpec:TechSpec;
  public vendorList:Vendor[];

  public onFileChanged(event):void{
    this.selectedFile = event.target.files[0];
   // var reader = new FileReader();
   // reader.readAsDataURL(event.target.files[0]);
   // reader.onload = (event) => {
     // this.imageShow = (<FileReader>event.target).result;
    //}
  }

  submit():void {
      
      this.productService.uploadProduct(this.product, this.selectedFile).subscribe(data =>{
        if(data.status== "success"){
          
          this.product = new Product();
          this.techSpec = new TechSpec();
          this.selectedFile = null;
        }
      });            
  }

  addAttribute():void{
    this.product.techSpecs.push(this.techSpec);
    
    this.techSpec = new TechSpec();
  }

  removeAttribute(data:TechSpec):void{
    this.product.techSpecs = this.product.techSpecs.filter(t=> t.itemAttribute != data.itemAttribute);
    
  }

}
