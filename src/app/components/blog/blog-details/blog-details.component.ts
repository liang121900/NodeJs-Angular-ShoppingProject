import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';
import { Blog } from 'src/app/model/blog';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute,private blogService:BlogService) { }
  public bid:String;
  public blog:Blog=new Blog();
  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      this.bid=params.get('bid');
    });
    if(this.bid){
      this.blogService.getBlog(this.bid).subscribe(blog=>{
        console.log(blog);
        if(blog)
          this.blog=blog;
      });
    }
  }

}
