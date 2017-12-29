import { Component, OnInit } from '@angular/core';


import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css'],
  providers:[BlogService]
})
export class BlogListComponent implements OnInit {

  blogs;
  constructor(    
    private blogService:BlogService
  ) 
  { 

  }

  ngOnInit():void {
    this.getBlogs();
  }

  getBlogs():void{
    this.blogs = this.blogService.getBlogs();
  }
}
