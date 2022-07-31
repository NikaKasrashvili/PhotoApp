import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadPhotoRoutingModule } from './upload-photo-routing.module';
import { InsertPhotoComponent } from './insert-photo/insert-photo.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InsertPhotoComponent
  ],
  imports: [
    CommonModule,
    UploadPhotoRoutingModule,
    ReactiveFormsModule
  ]
})
export class UploadPhotoModule { }
