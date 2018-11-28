import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlbumThumbComponent } from './album-thumb/album-thumb.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumThumbComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
