import { Component, OnInit } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { Hero } from '../hero';
import { HeroesService } from '../heroes.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css',
})
export class HeroDetailComponent implements OnInit {
  hero$!: Observable<Hero>;
  constructor(
    private service: HeroesService, 
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    this.hero$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.service.getHero(params.get('id')!))
    );
  }

   gotoHeroes(hero: Hero) {
     const heroId = hero ? hero.id : null;
     this.router.navigate(['/superheroes', {id: heroId, foo: 'foo'}]);
   }

}
