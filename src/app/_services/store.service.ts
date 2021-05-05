import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { StoreItem } from '../_models/store-item';
import { Observable } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class StoreService {
  constructor(private http: HttpClient) {}

  getAllItems(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/store-items/`);
  }

  create(item: StoreItem): Observable<any> {
    return this.http.post(`${environment.apiUrl}/store-items/create`, { item });
  }

  update(id: any, item: StoreItem): Observable<any> {
    return this.http.put(`${environment.apiUrl}/store-items/:id`, item);
  }

  delete(item: any): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/store-items/${item}`);
  }
}
