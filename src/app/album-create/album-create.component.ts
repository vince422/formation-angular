import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Album } from '../album';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-album-create',
  templateUrl: './album-create.component.html',
  styleUrls: ['./album-create.component.css']
})
export class AlbumCreateComponent implements OnInit {

  newAlbum = new Album();

  @Output()
  albumCreated = new EventEmitter<Album>();

  constructor() { }

  ngOnInit() {
  }

  create(form: NgForm) {
    this.albumCreated.emit(this.newAlbum);
    this.newAlbum = new Album();
    form.reset();
  }

}
