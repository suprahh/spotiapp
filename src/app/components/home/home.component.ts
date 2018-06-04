import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SpotifyService} from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nuevasCanciones: any[] = [];
  loading: boolean;

  constructor(private http: HttpClient,
              private spotify: SpotifyService) {
    this.loading = true;
              this.spotify.getNewReleases()
                .subscribe( (albums: any) => {
                   this.nuevasCanciones = albums;
                  this.loading = false;
                });
  }

  ngOnInit() {
  }

}
