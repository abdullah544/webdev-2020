import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }         from './app.component';
import { FilmDetailComponent }  from './film-detail/film-detail.component';
import { FilmsComponent }      from './films/films.component';
import { MessagesComponent }    from './messages/messages.component';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    FilmsComponent,
    FilmDetailComponent,
    MessagesComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }