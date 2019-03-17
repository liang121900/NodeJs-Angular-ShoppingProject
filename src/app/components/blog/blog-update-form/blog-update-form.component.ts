import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Blog } from 'src/app/model/blog';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BlogService } from 'src/app/services/blog.service';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-blog-update-form',
  templateUrl: './blog-update-form.component.html',
  styleUrls: ['./blog-update-form.component.css']
})
export class BlogUpdateFormComponent implements OnInit {


  public message:String="";
  @Input() public blog:Blog;

  public selectedFile:File;
  public uploadFile:File;
  public imageShow;
  public blogCopy:Blog;
  @Output() isUpdated = new EventEmitter<Blog>();
  closeResult: string;
  public isAdmin:boolean=false;
  constructor(private modalService: NgbModal, private blogService:BlogService,private userService:UserService) { }


  ngOnInit(){
    this.userService.observableUser.subscribe(user=>{
      if(user.role=='admin')
        this.isAdmin=true;
    });

  }

  open(content) {
    this.blogCopy=Object.assign({}, this.blog);
    this.blogCopy.tags=Object.assign([],this.blog.tags);
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${reason}`;
    });
  }



  trackByIdx(index: number, tag: any): any {
    return index;
  }

  public addTag(){
    if(this.blogCopy.tags.length<1)
        this.blogCopy.tags.push('');
    //if the field is empty, do not add new field
    else if(this.blogCopy.tags[this.blogCopy.tags.length-1].trim().length>0)
        this.blogCopy.tags.push('');
    
  }

public removeTag(i:number){
  this.blogCopy.tags.splice(i,1);
}


public updateBlog(){
  this.blogService.patchBlogDetail(this.blogCopy).subscribe(res=>{
    this.message=res;
    if(this.message=='update blog success.'){
      this.isUpdated.emit(this.blogCopy);
    }
  });
 
}




}
