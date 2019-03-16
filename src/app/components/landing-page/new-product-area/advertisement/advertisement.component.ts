import { Component, OnInit } from '@angular/core';
import { Advertisement } from 'src/app/model/advertisement';
import { AdvertisementService } from 'src/app/services/advertisement.service';
import { NgbModal, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.css']
})
export class AdvertisementComponent implements OnInit {

  private adDetails:Advertisement;
  private adLoaded:Promise<Boolean>;
  public imageShow:string|ArrayBuffer; 
  public selectedFile:File;

  constructor(private adService:AdvertisementService, private modalService:NgbModal) { }

  ngOnInit() {
    this.adService.findAdById("A200").subscribe(data=>{
      this.adDetails=data;
      this.adLoaded=Promise.resolve(true);

      this.imageShow=data.imageUrl;
    });
  }

  public openPopUp(content){
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  public editAd() {
    this.modalService.dismissAll();
    this.adService.editAd(this.adDetails, this.selectedFile).subscribe(data =>{
      console.log(data)
    });
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
  }
}
