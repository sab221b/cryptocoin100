import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
const url = 'cryptocoin';


@Injectable({
  providedIn: 'root'
})

export class CryptocoinService {

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get(`${url}/list`);
  }
}
