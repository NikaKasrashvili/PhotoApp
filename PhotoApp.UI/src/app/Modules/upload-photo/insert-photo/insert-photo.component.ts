import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable,  Subscriber } from 'rxjs';
import { ConnectToDataService } from 'src/app/connect-to-data.service';


@Component({
  selector: 'app-insert-photo',
  templateUrl: './insert-photo.component.html',
  styleUrls: ['./insert-photo.component.css']
})

export class InsertPhotoComponent implements OnInit {
  
  sentData = {}
  image: string 

  photoForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    author: new FormControl(''),
    descriptions: new FormControl('', [Validators.required]),
   });

  
  constructor(private connectToData: ConnectToDataService, private router: Router) { 
    
    
  }

  ngOnInit(): void {
  }

  onChange($event: Event){
    const file=($event.target as HTMLInputElement).files[0];
    this.convertToBase64(file);
     
  }

  convertToBase64(file: File){
    const observable = new Observable((subscriber: Subscriber<any>)=>{
      this.readFile(file, subscriber);
    });
    observable.subscribe((d)=>{
      this.image = d;
    });
  }

  readFile(file: File, subscriber: Subscriber<any>){
    const filereader = new FileReader();
    filereader.readAsDataURL(file);

    filereader.onload=()=>{
      subscriber.next(filereader.result);
      subscriber.complete();
    }

    filereader.onerror=(error)=>{
      subscriber.error(error);
      subscriber.complete();
    }
  }

 


  onSubmit(){
    this.sentData = {
      imageUrl : this.image,
      ...this.photoForm.value
    }
    
    let sub = this.connectToData.insertPhoto(this.sentData).subscribe(res=>{
      this.router.navigateByUrl("/");
      sub.unsubscribe();
    });
    
  }

}
