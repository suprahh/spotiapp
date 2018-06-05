import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SpotifyService} from '../../services/spotify.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {
  private artista: object;
  private topTracks: any[];
  private loading: boolean;
  constructor(private http: HttpClient,
              private spotify: SpotifyService,
              private router: ActivatedRoute) {
    this.loading = true;
    this.router.params.subscribe( params => {
      this.getArtista(params.id);
      this.getTopTrack(params.id);
    });
  }

  ngOnInit() {
  }


  public getArtista(id) {
    this.spotify.getArtista(id)
      .subscribe( artista => {
        // console.log(artista);
        this.artista = artista;
        this.loading = false;
      });
  }
  public getTopTrack(id) {
    this.spotify.getTopTracks(id)
      .subscribe( topTracks => {
        this.topTracks = topTracks;
      });
  }

}
