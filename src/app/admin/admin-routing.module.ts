import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { ManageCrisesComponent } from './manage-crises/manage-crises.component';
import { ManageHeroesComponent } from './manage-heroes/manage-heroes.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { authGuard } from '../auth/auth.guard';
const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [authGuard], // <-- Auth guard on the parent route
    children: [
      {
        path:'',
        canActivateChild: [authGuard], // <-- Auth guard on child routes
        children: [
          {path: 'crises', component: ManageCrisesComponent},
          {path: 'heroes', component: ManageHeroesComponent},
          {path: '', component:AdminDashboardComponent}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
