import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Photo } from '../class/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http:HttpClient) {}

  counter = 0

  favSubject = new Subject<number>();

  apiUrl = 'https://jsonplaceholder.typicode.com/photos'

  getPhoto(){
    return this.http.get<Photo[]>(this.apiUrl)
    .pipe(
      catchError(err => throwError(err))
    )
  }
  deletePhoto(id:number){
    return this.http.delete<Photo[]>(this.apiUrl+id).pipe(
      catchError(err => throwError(err))
    )
  }
  addFav(){
    this.counter++
    this.favSubject.next(this.counter)
  }
}
