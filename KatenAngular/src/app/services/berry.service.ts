import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'
import {IBerry} from '../models/berry'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BerryService {

  constructor(private http: HttpClient) { }

  // getAll(): Observable<IBerry[]> {
  //   return this.http.get<IBerry[]>('https://pokeapi.co/api/v2/berry', {
  //     params: new HttpParams({
  //       fromObject: {limit: 5}
  //     })
  //   })
  // }

  getAll(): Observable<IBerry[]>{
    return this.http.get<IBerry[]>('https://pokeapi.co/api/v2/berry',{
      params: new HttpParams().append('limit',5)
    })
  }

  // getAll(){
  //   fetch('https://pokeapi.co/api/v2/berry/1')
  //   .then(res => res.json())
  //   .then(console.log)
}