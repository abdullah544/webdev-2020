import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Film } from './film';
import { FILMS } from './mock-films';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class FilmService {

  constructor(private messageService: MessageService) { }

  getFilms(): Observable<Film[]> {
    // TODO: send the message _after_ fetching the films
    this.messageService.add('FilmService: fetched films');
    return of(FILMS);
  }

  getFilm(id: number): Observable<Film> {
    // TODO: send the message _after_ fetching the film
    this.messageService.add(`FilmService: fetched film id=${id}`);
    return of(FILMS.find(film => film.id === id));
  }
}