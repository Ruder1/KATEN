import {Injectable} from '@angular/core'
import {HttpClient, HttpParams} from '@angular/common/http'
import {Observable, tap } from 'rxjs'
import {IBerry} from '../models/berry'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(
    private http: HttpClient) {}

  berries: IBerry[] = []

  getAll(): Observable<IBerry[]> {
    return this.http.get<IBerry[]>('https://pokeapi.co/api/v2/berry', {
      params: new HttpParams({
        fromObject: {limit: 5}
      })
    }).pipe(
      tap(berries => this.berries = berries),
    )
  }
}

// fetch('https://pokeapi.co/api/v2/berry/1')
//   .then(res => res.json())
//   .then(console.log)