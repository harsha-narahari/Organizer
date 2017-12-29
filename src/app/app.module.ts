import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryFolderComponent } from './gallery-folder/gallery-folder.component';
import { ThemeSelectorComponent } from './theme-selector/theme-selector.component';
import { BlogComponent } from './blog/blog.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';

const appRoutes: Routes = [
  { path: 'file-upload', component: FileUploadComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'blogs', component: BlogListComponent },
  { path: 'blog/:title', component: BlogComponent },
  { path: 'blog-edit/:title', component: BlogEditComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent,
    GalleryComponent,
    GalleryFolderComponent,
    ThemeSelectorComponent,
    BlogComponent,
    BlogListComponent,
    BlogEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
