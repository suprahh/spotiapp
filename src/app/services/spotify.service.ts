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
      .pipe( map( (data: any) =>  data.artists.items));
  }


  public getQuery(query): any {
    const cabecera = new HttpHeaders()
      .set('Authorization', 'Bearer BQC2GQXwHn2YV8j42EGpGVUBmPUlWS9ukqWjT8KwiP5SCaVPV7Rydx6bjrYMBjMkiBjnDM8HYEnRgMU49jY');
    return this.http.get(`${this.url}${query}`, {headers: cabecera});
  }
}