import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Album } from '../album';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-album-create',
  templateUrl: './album-create.component.html',
  styleUrls: ['./album-create.component.css']
})
export class AlbumCreateComponent implements OnInit {

  newAlbum = new Album();

  @Output()
  albumCreated = new EventEmitter<Album>();

  @Output()
  albumRemoved = new EventEmitter<Album>();

  constructor(private http: HttpClient) {}

  ngOnInit() {
  }

  create(form: NgForm) {
    const pendingAlbum = this.newAlbum; // Capture le nouvel album pour retirer si soucis
    this.http.post('http://www.lesonunique.com', this.newAlbum).subscribe(rep => {
      console.log(rep);
    },  e => {
      console.log(e);
      this.cancel(pendingAlbum);
    });
    this.albumCreated.emit(this.newAlbum);
    this.newAlbum = new Album();
    form.reset();
  }

  private cancel(pendingAlbum: Album) {
    this.newAlbum = pendingAlbum;
    this.albumRemoved.emit(this.newAlbum);
  }
}
