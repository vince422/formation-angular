import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Album } from '../album';

@Component({
  selector: 'app-album-thumb',
  templateUrl: './album-thumb.component.html',
  styleUrls: ['./album-thumb.component.css']
})
export class AlbumThumbComponent implements OnInit {

  @Input()
  album: Album;

  @Output()
  albumSelected = new EventEmitter<Album>();

  constructor() { }

  ngOnInit() {
  }

  select(): void {
    this.albumSelected.emit(this.album);
  }

}
