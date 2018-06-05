import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {
 @Input() items: any[] = [];
  constructor(private router: Router) { }

  ngOnInit() {
  }

  public verArtista(item: any) {
    let artistaId;
   if (item.type === 'album') {
     artistaId = item.artists[0].id;
   } else {
     artistaId = item.id;
   }
   this.router.navigate(['artista', artistaId]);
  }
}
