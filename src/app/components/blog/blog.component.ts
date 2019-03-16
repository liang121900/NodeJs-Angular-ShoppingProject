import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/model/blog';
import { BlogService } from 'src/app/services/blog.service';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/model/User';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { thisExpression } from 'babel-types';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogs:Blog[]=[];
  constructor(private blogService:BlogService,private userService:UserService,private modalService: NgbModal) { }
  public isAdmin:boolean;
  public closeResult: string;
  private blog:Blog;
  public blogPostDate:string;


  public selectedFile:File;
  public uploadFile:File;
  public imageShow;

  ngOnInit() {
    this.userService.observableUser.subscribe(user=>{
      if(user.role&&user.role=='admin')
        this.isAdmin=true;
      else
        this.isAdmin=false;
    });


    this.blogService.getAllBlogs().subscribe(blogs=>{
      if(blogs&&blogs.length>0){
        this.blogs=blogs;
      }
    });

  }


  public removeBlog(blog: Blog) {
    if (confirm("Are you sure to delete blog " + blog.title)) {
      console.log("Implement delete functionality here");

      this.blogService.removeBlog(blog.bid).subscribe(res => {
        if (res && res == 'success')
          this.blogs = this.blogs.filter(b => { return b.bid != blog.bid });
      });
    }
  }

  public openUpdateBlog(blog:Blog,content){
    this.blog = Object.assign({}, this.blog,blog);
    this.imageShow=this.blog.image;
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


  public updateBlog() {
    this.blogService.updateBlog(this.blog,this.selectedFile).subscribe(res => {
      if (res && res == 'success') {
        this.blogs = this.blogs.map(b => { return b.bid == this.blog.bid ? this.blog : b });
        this.blog = new Blog();
      }
    });
  }
}
