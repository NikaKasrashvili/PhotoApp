import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoDetailsComponent } from './photo-details/photo-details.component';
import { PhotosComponent } from './photos/photos.component';

const routes: Routes = [
  {path: "", component: PhotosComponent},
  {path: "details/:id", component: PhotoDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotoBlogRoutingModule { }
