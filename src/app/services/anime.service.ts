import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Anime } from '../interfaces/anime.interface';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  private url: string = 'https://api.jikan.moe/v4';

  constructor(private http: HttpClient) { }

  obtenerNoticas(): Observable<Anime>{
    const url = `${this.url}/anime/1/news`;

    return this.http.get<Anime>(url);
  }
}
