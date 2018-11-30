import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AlbumsService } from '../albums.service';

import { Album } from '../album';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {

  album: Album;

  constructor(private route: ActivatedRoute,
              private albumsService: AlbumsService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
        const id = params.get('id');
        this.album = this.albumsService.get(+id);
    });
  }

}
