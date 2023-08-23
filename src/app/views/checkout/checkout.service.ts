import { Injectable } from '@angular/core';
import { Film } from '../list-films/film.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  public baseUrl: string = 'http://localhost:3000';
  public listFilms: Film[] = [];

  constructor(private httpClient: HttpClient) {}

  getListFilms(): Observable<Film[]> {
    return this.httpClient.get<Film[]>(`${this.baseUrl}/films`);
  }
}
