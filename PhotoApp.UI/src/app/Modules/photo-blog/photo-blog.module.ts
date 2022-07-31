import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PhotoBlogRoutingModule } from './photo-blog-routing.module';
import { PhotosComponent } from './photos/photos.component';
import { PhotoDetailsComponent } from './photo-details/photo-details.component';


@NgModule({
  declarations: [
    PhotosComponent,
    PhotoDetailsComponent
  ],
  imports: [
    CommonModule,
    PhotoBlogRoutingModule
  ]
})
export class PhotoBlogModule { }
