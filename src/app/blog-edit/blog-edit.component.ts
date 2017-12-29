import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css'],
  providers: [BlogService]
})
export class BlogEditComponent implements OnInit {

  blog;
  blogContent;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private blogService: BlogService
  ) { }

  ngOnInit() {
    this.getBlog();
  }

  getBlog() {
    this.blog = this.blogService.getBlog(this.route.snapshot.paramMap.get("title"));
    this.blogContent = this.blog.content;
  }

  saveBlog() {    
    this.blog.content = this.blogContent;
    this.blogService.saveBlog(this.blog);
  }

}
