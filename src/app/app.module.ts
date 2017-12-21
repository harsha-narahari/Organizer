import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryFolderComponent } from './gallery-folder/gallery-folder.component';
import { ThemeSelectorComponent } from './theme-selector/theme-selector.component';

const appRoutes: Routes = [
  { path: 'file-upload', component: FileUploadComponent },
  { path: 'gallery', component: GalleryComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent,
    GalleryComponent,
    GalleryFolderComponent,
    ThemeSelectorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
