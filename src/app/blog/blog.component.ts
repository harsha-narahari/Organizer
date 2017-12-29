import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers:[BlogService]
})
export class BlogComponent implements OnInit {
  blog;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private blogService:BlogService
  ) { }

  ngOnInit() {
    this.getBlog();
  }

  getBlog()
  {
    this.blog=this.blogService.getBlog(this.route.snapshot.paramMap.get("title"));
  }

}
