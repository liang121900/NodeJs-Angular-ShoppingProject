import { Component, Input,OnInit } from '@angular/core';
import { Slider } from '../../model/slider';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { SliderService } from 'src/app/services/slider.service';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'ngbd-modal-basic',
  templateUrl: './modal-basic.html'
})
export class NgbdModalBasic implements OnInit{

  public message:String="";
  @Input() private slider:Slider = new Slider(); 
  public selectedFile:File;
  public uploadFile:File;
  public imageShow;
  private currentUser:User;

    closeResult: string;

  constructor(private modalService: NgbModal, private sliderService:SliderService,private userService:UserService) { }

  ngOnInit(){
    this.userService.observableUser.subscribe(user=>{
      this.currentUser=user;
    });
  }

  open(content) {
    this.slider= Object.assign({}, this.slider);
    this.imageShow=this.slider.image;
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

  public updateSlider():void{
    this.sliderService.updateSlider(this.slider,this.selectedFile).subscribe(data=>{
      console.log(data);
      console.log('slider updated');
      this.message = "Information Updated!";
      this.slider = new Slider();
    });


  }


}
