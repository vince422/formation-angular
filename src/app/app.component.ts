import { Component } from '@angular/core';
import { Album } from './album';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Boutique';
  albums: Album[] = [];
  currentAlbum: Album;

  constructor() {
    this.albums.push({ title: 'U2', price: 15, cover: 'https://img.discogs.com/QkmchdYHqmsVULZsGGaYY_eW5jQ=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-786161-1215152956.jpeg.jpg' });
    this.albums.push({ title: 'Pink Floyd', price: 20, cover: 'https://img.discogs.com/d1NBrfuCh9VKASs6cWjH0GJ_Ntk=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-575044-1355435867-7324.jpeg.jpg' });
    this.albums.push({ title: 'Led Zeppelin', price: 20, cover: 'https://img.discogs.com/SmdalY-gOwtPuVv3FvW23ewg8b4=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-1015465-1366311867-2785.jpeg.jpg' });
  }

  setCurrent(album: Album): void {
    this.currentAlbum = album;
  }
}
