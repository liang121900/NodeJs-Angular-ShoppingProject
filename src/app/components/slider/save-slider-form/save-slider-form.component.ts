import { Component, OnInit } from '@angular/core';
import { Slider } from 'src/app/model/slider';
import { SliderService } from 'src/app/services/slider.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-save-slider-form',
  templateUrl: './save-slider-form.component.html',
  styleUrls: ['./save-slider-form.component.css']
})
export class SaveSliderFormComponent {
  ngOnInit
  public message:String="";
  private slider:Slider = new Slider(); 
  public selectedFile:File;
  public uploadFile:File;
  public imageShow;

  closeResult: string;

  constructor(private modalService: NgbModal, private sliderService:SliderService) { }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      
    }, (reason) => {
      this.closeResult = `Dismissed ${reason}`;
    });
  }

  public onFileChanged(event): void {
    this.selectedFile = event.target.files[0];


    //Trying the image preview code!
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event) => {
      this.imageShow = (<FileReader>event.target).result;
    };
  }

  public addSlider():void{
    this.sliderService.addSlider(this.slider,this.selectedFile).subscribe(data=>{

      this.message = "Information Saved!";

      this.slider = new Slider();
      this.selectedFile = null;
    });

  }
}
