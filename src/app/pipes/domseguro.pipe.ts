import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor(private domSanitize: DomSanitizer) {}
  transform(url: any, tipo?: string): SafeResourceUrl {
    if ( tipo === 'youtube') {
      const result = 'https://youtube.com/embed/' + url;
      return this.domSanitize.bypassSecurityTrustResourceUrl(result);
    }
    if ( tipo === 'spotify') {
      const result = 'https://open.spotify.com/embed?uri=spotify:track:' + url;
      return this.domSanitize.bypassSecurityTrustResourceUrl(result);
    }
    return this.domSanitize.bypassSecurityTrustResourceUrl(tipo + url);
  }

}
