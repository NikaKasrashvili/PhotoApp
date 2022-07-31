import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: '', loadChildren: ()=> import('./Modules/photo-blog/photo-blog.module').then(m=>m.PhotoBlogModule)},
  {path: 'uploadphoto', loadChildren: ()=> import('./Modules/upload-photo/upload-photo.module').then(m=>m.UploadPhotoModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
