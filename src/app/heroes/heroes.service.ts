import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from '../message.service';


@Injectable({
  providedIn: 'root'
})


export class HeroesService {
  
  constructor(private messageService:MessageService) { }

  //Ottieni la lista degli eroi

  getHeroes(): Observable<Hero[]>{
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  // recupera l'id e  restituisce il relativo eroe
  getHero(id: number | string)  {
    return this.getHeroes().pipe(
      map((heroes: Hero[]) => heroes.find(hero => hero.id === +id)!)
    );
  }


}
