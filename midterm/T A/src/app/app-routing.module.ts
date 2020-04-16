import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FilmsComponent }      from './films/films.component';
import { FilmDetailComponent }  from './film-detail/film-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: FilmDetailComponent },
  { path: 'films', component: FilmsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}