import { Component, OnInit,Output, EventEmitter, ViewChild } from '@angular/core';
import { Blog } from 'src/app/model/blog';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-save-form',
  templateUrl: './blog-save-form.component.html',
  styleUrls: ['./blog-save-form.component.css']
})
export class BlogSaveFormComponent implements OnInit {
  ngOnInit
  public message:String="";


  public selectedFile:File;
  public uploadFile:File;
  public imageShow;
  public blog:Blog;

  @ViewChild('form') form: any;

  
  closeResult: string;

  constructor(private modalService: NgbModal, private blogService:BlogService) { }

  open(content) {
    this.message="";
    this.blog=new Blog();
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

  public addBlog():void{
    console.log(this.blog);
    this.blogService.addBlog(this.blog,this.selectedFile).subscribe(data=>{
      
      this.message = "Information Saved!";

      this.blog = new Blog();
      this.selectedFile = null;
    });

  }

}
