import { BrowserModule } from '@angular/platform-browser';
import { InjectionToken, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { AlbumIndexComponent } from './album-index/album-index.component';
import { AlbumThumbComponent } from './album-thumb/album-thumb.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { AlbumCreateComponent } from './album-create/album-create.component';

import { LoggerService } from './logger.service';

import { SERVER_URL, SERVER_URL_TOKEN, configFactory } from './app.config';
const LOGGER_ALIAS = new InjectionToken('Alias vers le logger');
const SECOND_CONFIG = new InjectionToken('Une deuxième config');

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AlbumThumbComponent,
    AlbumDetailComponent,
    AlbumCreateComponent,
    AlbumIndexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'albums', pathMatch: 'full' },
      { path: 'albums', component: AlbumIndexComponent },
      { path: 'album/:id', component: AlbumDetailComponent },
      { path: 'create', component: AlbumCreateComponent }
    ])
  ],
  providers: [
    LoggerService, // Equivalent : { provide: LoggerService, useClass: LoggerService } -- Fonctionnement de base
    { provide: SERVER_URL_TOKEN, useValue: SERVER_URL }, // -- Valeur accessible en service
    { provide: LOGGER_ALIAS, useExisting: LoggerService }, // -- Créer un alias pour un module
    { provide: SECOND_CONFIG, useFactory: configFactory, deps: ['Vincent'] } // -- Mettre en service une fonction
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
