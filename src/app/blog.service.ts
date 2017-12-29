import { Injectable } from '@angular/core';

@Injectable()
export class BlogService {

  constructor() { }

  blogs=[{
    title:"Blog1",
    author:"Harsha",
    createdDateTime:"01/01/2017",
    modifiedDateTime:"01/01/2017",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    title:"Blog2",
    author:"Harsha",
    createdDateTime:"01/01/2017",
    modifiedDateTime:"01/01/2017",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    title:"Blog3",
    author:"Harsha",
    createdDateTime:"01/01/2017",
    modifiedDateTime:"01/01/2017",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }];

  getBlogs()
  {    
    return this.blogs;
  }

  getBlog(title)
  {
    debugger;
    return this.blogs.filter(b=>b.title==title)[0];
  }

  saveBlog(editedBlog)
  {
    let blog = this.blogs.filter(b=>b.title==editedBlog.title)[0];
    let index = this.blogs.indexOf(blog);
    this.blogs.splice(index, 1);
    let currentDate = new Date();
    blog.modifiedDateTime = currentDate.toLocaleDateString("en-US");
    blog.content = editedBlog.content;
    this.blogs.push(blog);
  }
}
