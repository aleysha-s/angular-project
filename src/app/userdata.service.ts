import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  url = ' /api/v1/products'
  constructor(private http: HttpClient) { }
  userdata() {
    return this.http.get(this.url)
  }
}
