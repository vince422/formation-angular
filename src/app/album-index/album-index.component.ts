import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { AlbumsService } from '../albums.service';
import { LoggerService } from '../logger.service';

import { SERVER_URL_TOKEN } from '../app.config';
import { Album } from '../album';

@Component({
  selector: 'app-album-index',
  templateUrl: './album-index.component.html',
  styleUrls: ['./album-index.component.css']
})
export class AlbumIndexComponent implements OnInit {

  albums: Album[];
  // currentAlbum: Album = undefined;
  // lastAlbum: Album;

  constructor(private albumsService: AlbumsService,
              private loggerService: LoggerService,
              private router: Router,
              private title: Title,
              @Inject(SERVER_URL_TOKEN) serverUrl: string) {
    console.log(serverUrl);
  }

  ngOnInit() {
    this.albums = this.albumsService.albums;
    this.title.setTitle('Boutique');
  }

  showDetail(album: Album) {
    this.router.navigate(['album', album.id ]).then(res => {
      console.log(res);
    });
  }

  /*setCurrent(album: Album): void {
    this.currentAlbum = album;
  }*/

  /*setCreated(album: Album): void {
    this.albums.push(album);
    this.lastAlbum = this.currentAlbum;
    this.currentAlbum = album;
  }

  removeCreated(album: Album): void {
    this.albums.splice(this.albums.indexOf(album), 1);
    this.currentAlbum = this.lastAlbum;
  }*/

}
