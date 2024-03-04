import { Component, OnInit } from '@angular/core';
import { Observable, switchMap } from 'rxjs';

import { Hero } from '../hero';
import { HeroesService } from '../heroes.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrl: './heroes-list.component.css'
})
export class HeroesListComponent implements OnInit {
  
  heroes$!:Observable<Hero[]>
  selectedId=0;

  constructor(
    private service: HeroesService, 
    private route: ActivatedRoute ){}

  ngOnInit(): void {
    this.heroes$ = this.route.paramMap.pipe(
      // Extract the id from the route
      switchMap((params)=>{
        this.selectedId = parseInt(params.get('id')!,10);
        return this.service.getHeroes();
      })
    )
  }
}
