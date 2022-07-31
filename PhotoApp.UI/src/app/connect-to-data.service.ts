import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo } from './Models/photo.model';

@Injectable({
  providedIn: 'root'
})
export class ConnectToDataService {

  constructor(private http: HttpClient) { }

  // Get All Photos from Database
  getAllPhotos(){
    return this.http.get<Photo[]>('https://localhost:7139/api/photos/getAllPhotos');
  }

  // Upload Photo to Database
  insertPhoto(data: any){
    return this.http.post('https://localhost:7139/api/photos/insert', data);
  }

  deletePhoto(id: number){ 
    return this.http.delete(`https://localhost:7139/api/photos/deletePhoto/${id}`);
  }
}
