import { Component, OnInit } from '@angular/core';
import { ConnectToDataService } from 'src/app/connect-to-data.service';
import { Photo } from 'src/app/Models/photo.model';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  allPhotos  : Photo[];

  constructor(private photoService: ConnectToDataService) { }

  ngOnInit(): void {
    this.getAllPhotos();
  }

  onDelete(id:number){
    let sub=this.photoService.deletePhoto(id).subscribe(res=>{
      this.getAllPhotos();
      sub.unsubscribe();
    });
  }


  getAllPhotos(){
    let sub=this.photoService.getAllPhotos().subscribe((res)=>{
      this.allPhotos = res;
      sub.unsubscribe();
    })  
  }
}
