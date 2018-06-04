import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class SpotifyService {
  private url = 'https://api.spotify.com/v1/';

  constructor(private http: HttpClient) {}
  public getNewReleases() {
    const obtenerNuevosLanzamientos = 'browse/new-releases?limit=20';
    return this.getQuery(obtenerNuevosLanzamientos)
      .pipe( map( (data: any)  => data.albums.items));
  }

  public getArtista(artist) {
    const buscarArtista = `search?q=${artist}&type=artist&limit=10`;
    return this.getQuery(buscarArtista)
      .pipe( map( (data: any) =>  {
        if (data.artists) {
         return data.artists.items;
        } else {
          return null;
        }
      }));
  }


  public getQuery(query): any {
    const cabecera = new HttpHeaders()
      .set('Authorization', 'Bearer BQAM3rLOaFVaoa9OIEoKQVNkQ5-rNkXIfcXwbE0u79eEwcQhf04djZcw7H71OiinaM9Y8HZm8a4AhIQ9GSc');
    return this.http.get(`${this.url}${query}`, {headers: cabecera});
  }
}
