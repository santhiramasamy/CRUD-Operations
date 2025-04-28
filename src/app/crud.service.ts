import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  baseUrl: string = 'http://localhost:3000/Users'; //Here data is stored as an Observable
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get<User[]>(this.baseUrl); // Here User is the interface
  }

  postData(data: User) {
    return this.http.post(this.baseUrl, data);
  }

  getDataById(id: number) {
    return this.http.get<User>(`${this.baseUrl}/${id}`);
  }

  putDataById(id: number, data: User) {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  deleteData(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
