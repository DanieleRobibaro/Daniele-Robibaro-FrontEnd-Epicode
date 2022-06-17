import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blueprint } from './model/blueprint.model';

const APIURL = 'http://localhost:4201/posts';

@Injectable({
  providedIn: 'root',
})
export class OperationsService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Blueprint[]> {
    return this.http.get<Blueprint[]>(APIURL);
  }

  createPost(data: any): Observable<any> {
    return this.http.post(APIURL, data);
  }

  updatePost(id: any, data: any): Observable<any> {
    return this.http.put(APIURL + '/' + id, data);
  }

  getPost(id: number): Observable<any> {
    return this.http.get(APIURL + '/' + id);
  }

  deletePost(id: any): Observable<any> {
    return this.http.delete(APIURL + '/' + id);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(APIURL);
  }
}
