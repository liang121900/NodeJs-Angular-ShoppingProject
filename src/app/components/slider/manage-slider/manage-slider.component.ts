import { Component, OnInit} from '@angular/core';
import { SliderService } from 'src/app/services/slider.service';
import { Slider } from 'src/app/model/slider';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-manage-slider',
  templateUrl: './manage-slider.component.html',
  styleUrls: ['./manage-slider.component.css']
})
export class ManageSliderComponent implements OnInit {

  public sliderData=[];
  public selectedSlider:Slider;
  public imageUrl:string="";
  constructor(private sliderService:SliderService, private dataService: DataService, private router: Router) { }

  ngOnInit() {
    //To output all the records.
    this.sliderService.findSlider().subscribe(data => {
      //We have just added this line here.
      this.dataService.currentMessage.subscribe(slider => this.selectedSlider = slider);
      this.sliderData=data;
      //console.log(data);
      data.forEach(slider=>{
        if(slider.selected==="true"){
          this.selectedSlider=slider;
        }
      });
      //this.selectedSlider = data[0];      
    });
  }

  public onSelectionChange(slider) {
    //Terry 
    //this.selectedSlider.isSelected='false';
     this.selectedSlider = Object.assign({}, this.selectedSlider,slider);
  }

  public toMainSlider() {
    //this.selectedSlider.isSelected='true';

    this.selectedSlider.selected='true';
    this.sliderService.updateSelectedSlider(this.selectedSlider).subscribe(next=>{},err=>{console.log("Terry updateSelectedSlider error!");console.log(err);},()=>{});

    this.dataService.changeMessage(this.selectedSlider);
    this.router.navigate(['']);
  }

}
