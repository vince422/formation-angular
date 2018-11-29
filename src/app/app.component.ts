import { Component, Inject } from '@angular/core';
import { Album } from './album';
import { AlbumsService } from './albums.service';
import { LoggerService } from './logger.service';
import { SERVER_URL_TOKEN } from './app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Boutique';
  albums: Album[];
  currentAlbum: Album;

  constructor(albumsService: AlbumsService,
              private loggerService: LoggerService,
              @Inject(SERVER_URL_TOKEN) serverUrl: string) {
    this.albums = albumsService.albums;
    this.currentAlbum = this.albums[0];
  }

  setCurrent(album: Album): void {
    this.currentAlbum = album;
  }

  setCreated(album: Album): void {
    this.albums.push(album);
    this.currentAlbum = album;
  }
}
