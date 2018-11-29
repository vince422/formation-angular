import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Album } from './album';
import { LoggerService } from './logger.service';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  albums: Album[] = [];
  // albumsObservable: Observable<Album[]>;

  constructor(private loggerService: LoggerService,
              private http: HttpClient) {
    this.loggerService.log('Service albums execution');
    // Version Promise
    this.http.get('assets/albums.json').toPromise()
      .then((rep: Album[]) => {
        this.loggerService.log(rep);
        for (const album of rep) {
          this.albums.push(album);
        }
      })
      .catch(e => {
        console.log(e);
      });
    // Version Observable
    /*this.http.get('assets/albums.json')
      .subscribe((rep: Album[]) => {
        this.loggerService.log(rep);
        for (const album of rep) {
          this.albums.push(album);
        }
      }, err => {
        console.log(err);
      });*/
  }
}
