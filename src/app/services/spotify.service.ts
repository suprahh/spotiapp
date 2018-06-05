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

  public getArtistas(artist) {
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


  public getArtista(id) {
    const buscarArtista = `artists/${id}`;
    return this.getQuery(buscarArtista);
  }

  public getTopTracks(id) {
    const buscarArtista = `artists/${id}/top-tracks?country=ES`;
    return this.getQuery(buscarArtista)
      .pipe( map( (data: any) =>  {
        return data.tracks;
      }));
  }


  public getQuery(query): any {
    const cabecera = new HttpHeaders()
      .set('Authorization', 'Bearer BQD92pQkvJBXfhZ1HdliGRv4FseSiqedDVuv1T7bON9qFRF1GjjiSldeaVb3mFJkZ92pf31Mwist-iHpp5Y');
    return this.http.get(`${this.url}${query}`, {headers: cabecera});
  }
}
