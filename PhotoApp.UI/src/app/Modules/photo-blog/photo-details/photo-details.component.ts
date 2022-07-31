import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConnectToDataService } from 'src/app/connect-to-data.service';
import { Photo } from 'src/app/Models/photo.model';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.css']
})
export class PhotoDetailsComponent implements OnInit {

  itemId: number;
  photo: Photo
  constructor(private route: ActivatedRoute, private dataService: ConnectToDataService) {
    this.itemId = parseInt(this.route.snapshot.params["id"]);
  }

  ngOnInit(): void {
    let sub = this.dataService.getPhotoById(this.itemId).subscribe(
      res => {
        this.photo=res;
        sub.unsubscribe();
      })
  }

}
