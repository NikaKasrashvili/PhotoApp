import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertPhotoComponent } from './insert-photo/insert-photo.component';

const routes: Routes = [
  {path: '', component: InsertPhotoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UploadPhotoRoutingModule { }
