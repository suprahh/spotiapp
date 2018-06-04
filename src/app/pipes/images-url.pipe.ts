import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagesUrl'
})
export class ImagesUrlPipe implements PipeTransform {

  transform(imagenes: any[], args?: any): any {
    if (imagenes.length) {
      return imagenes[0].url;
    } else {
      return 'http://gastroahotel.cz/files/2016/01/silueta.jpg';
    }
  }

}
