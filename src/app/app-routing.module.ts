import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { CrisisListComponent } from './crisis-center/crisis-list/crisis-list.component';
import { HeroesListComponent } from './heroes/heroes-list/heroes-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'crisis-center', component:CrisisListComponent},
  {path: 'heroes', component:HeroesListComponent},
  {path:'', pathMatch:'full', redirectTo:'/heroes'},
  // Wildcard route for any unmatch
  {path:'404', component:PageNotFoundComponent},
  {path:'**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
