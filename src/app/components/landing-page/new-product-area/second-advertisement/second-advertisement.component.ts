import { Component, OnInit } from '@angular/core';
import { Advertisement } from 'src/app/model/advertisement';
import { AdvertisementService } from 'src/app/services/advertisement.service';
import { IImage } from '../../../../model/iimage';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-second-advertisement',
  templateUrl: './second-advertisement.component.html',
  styleUrls: ['./second-advertisement.component.css']
})
export class SecondAdvertisementComponent implements OnInit {

  private adLoaded:Promise<Boolean>;
  private size=4;
  private adDetails:Advertisement[]=[];
  private imageSources:(string | IImage)[] = [];
  private imageShow:string|ArrayBuffer; 
  private selectedFile:File;
  private adToEdit:number;
  private toShow:Boolean=true;

  constructor(private adService:AdvertisementService, private modalService:NgbModal) { }

  ngOnInit() {
    this.getAd("A250");
    this.getAd("A251");
    this.getAd("A252");
    this.getAd("A253");
  }

  getAd(id) {
    this.adService.findAdById(id).subscribe(data=>{
      this.adDetails.push(data);

      var iimage:IImage={ url:data.imageUrl, href:data.productId, caption:data.title };
      this.imageSources.push(iimage);
      //console.log(this.imageSources);
      --this.size;
      if (this.size==0) {
        this.adLoaded=Promise.resolve(true);
      }
    });
  }

  public openPopUp(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  public editAd() {
    this.imageShow=this.adDetails[this.adToEdit].imageUrl.toString();
    this.toShow=false;
  }

  public back() {
    this.toShow=true;
  }

  saveNewAd() {
    this.modalService.dismissAll();
    let editingAd = this.adDetails[this.adToEdit];
    this.adService.editAd(editingAd, this.selectedFile).subscribe(data => {
      //console.log(data);
    });
  }

  public onFileChanged(event) {
    this.selectedFile=event.target.files[0];

    var reader=new FileReader();
    reader.readAsDataURL(this.selectedFile);
    reader.onload=(event)=>{
      this.imageShow=(<FileReader>event.target).result;
    }
  }
}
