import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PhotoBlogRoutingModule } from './photo-blog-routing.module';
import { PhotosComponent } from './photos/photos.component';


@NgModule({
  declarations: [
    PhotosComponent
  ],
  imports: [
    CommonModule,
    PhotoBlogRoutingModule
  ]
})
export class PhotoBlogModule { }
