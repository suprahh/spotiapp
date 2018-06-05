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
  tipo: any;
  contenido: any;
  messageError: any;
  errorFlag: boolean;

  constructor(private http: HttpClient,
              private spotify: SpotifyService) {
    this.errorFlag = false;
    this.loading = true;
              this.spotify.getNewReleases()
                .subscribe( (albums: any) => {
                   this.nuevasCanciones = albums;
                  this.loading = false;
                }, (error) => {
                  this.captureError(error);
                });
  }

  ngOnInit() {
  }
  public captureError(error): void {
    this.contenido = error.error.error['message'];
    this.tipo = error.error.error['status'];
    this.messageError = error.message;
    this.errorFlag = true;
    this.loading = false;
  }

}
