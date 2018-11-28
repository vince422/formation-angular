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
    this.albums.push({ title: 'U2', price: 15 });
    this.albums.push({ title: 'Pink Floyd', price: 20 });
    this.albums.push({ title: 'Led Zeppelin', price: 20 });
  }

  setCurrent(album: Album): void {
    this.currentAlbum = album;
  }
}
