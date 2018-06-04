import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'artists'
})
export class ArtistsPipe implements PipeTransform {

  transform(artistas: any[], args?: any): string[] {
    const result = artistas.map( artista => {
      return ` ${artista.name}`;
    })
    return result;
  }

}
