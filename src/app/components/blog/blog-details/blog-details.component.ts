import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';
import { Blog } from 'src/app/model/blog';

import { Comment } from 'src/app/model/comment';
import { UserService } from 'src/app/services/user/user.service';
@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute,private blogService:BlogService) { }
  public bid:String;
  public blog:Blog=new Blog();
  public comment:Comment=new Comment();
  public isAdmin:boolean;
  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      this.bid=params.get('bid');
    });
    if(this.bid){
      this.blogService.getBlog(this.bid).subscribe(blog=>{
        if(blog){
          this.blog=blog;
        }
      });
    }


  }

  onUpdated(blog:Blog){
    this.blog=blog;
  }

  postComment(){
    var uid = require('angular-uid');
    this.comment.cid=uid();
    this.blogService.addBlogComment(this.blog.bid,this.comment).subscribe(res=>{
      if(res=='success'){
      this.blog.comments.push(this.comment);
      this.comment=new Comment();
      }
    });
  }
}
