import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {IBerry} from '../models/berry'
import { Observable } from 'rxjs';import { BerryCheck } from '../models/berriesModel';


@Injectable({
  providedIn: 'root'
})
export class BerryService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<BerryCheck>{
    return this.http.get<BerryCheck>('https://pokeapi.co/api/v2/berry')
  }
}
