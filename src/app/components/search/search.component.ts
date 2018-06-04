import { Component, OnInit } from '@angular/core';
import {s} from '@angular/core/src/render3';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  artistas: any[] = [];
  loading: boolean;

  constructor(private spotify: SpotifyService) {}

  public buscarArtista(termino: string): any {
    this.loading = true;
      this.spotify.getArtista(termino).subscribe( (artistas: any) => {
        this.artistas = artistas;
        this.loading = false;
      });
    }

  ngOnInit() {
  }

}
