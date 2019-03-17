import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { AppConfig } from '../config/app.config';
import { Observable } from 'rxjs';
import { Blog } from '../model/blog';
import { bind } from '@angular/core/src/render3';
import { Comment } from '../model/comment';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http:HttpClient) {
  }

  public getAllBlogs(): Observable<any> {
    const endpoint = AppConfig.BLOG_ENDPOINT;
    return this.http.get(endpoint);
  }

  public addBlog(blog:Blog,selectedFile:File):Observable<any>{
    const endpoint=AppConfig.BLOG_ENDPOINT;

    let formdata: FormData = new FormData();
    formdata.append('title', blog.title+'');
    formdata.append('postDate', blog.postDate+'');
    formdata.append('image',selectedFile);
    formdata.append('description',blog.description+'');

    const req = new HttpRequest('POST',endpoint, formdata, {
      reportProgress: true,
      responseType: 'text'
    });
    
    return this.http.request(req);
  }

  public removeBlog(bid:String):Observable<any>{
    let endpoint=AppConfig.BLOG_ENDPOINT+'/'+bid;
    return this.http.delete(endpoint);
  }

  public updateBlog(blog:Blog,selectedFile:File):Observable<any>{
    const endpoint=AppConfig.BLOG_ENDPOINT+'/'+blog.bid;

    let formdata: FormData = new FormData();
    formdata.append('title', blog.title+'');
    formdata.append('postDate', blog.postDate+'');
    formdata.append('image',selectedFile);
    formdata.append('description',blog.description+'');

    const req = new HttpRequest('PUT',endpoint, formdata, {
      reportProgress: true,
      responseType: 'text'
    });
    
    return this.http.request(req);
  }


  public getBlog(bid:String):Observable<any>{
    const endpoint=AppConfig.BLOG_ENDPOINT+'/'+bid;
    return this.http.get(endpoint);
  }
   

  public patchBlogDetail(blog:Blog):Observable<any>{
    let tempBlog=new Blog();
    const endpoint=AppConfig.BLOG_ENDPOINT+'/'+blog.bid;
    tempBlog.bid=blog.bid;
    tempBlog.title=blog.title;
    tempBlog.content=blog.content;
    tempBlog.postDate=blog.postDate;
    tempBlog.tags=blog.tags;
    return this.http.patch(endpoint,tempBlog);
    
  }

  public addBlogComment(bid:String,comment:Comment){
    const endpoint=AppConfig.BLOG_ENDPOINT+'/'+bid+'/comments/';
    return this.http.post(endpoint,comment);
  }

}
