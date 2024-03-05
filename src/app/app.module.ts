import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//Angular Material
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { CrisisCenterRoutingModule } from './crisis-center/crisis-center-routing.module';
import { AdminRoutingModule } from './admin/admin-routing.module'; 

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { AdminModule } from './admin/admin.module';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CrisisCenterModule } from './crisis-center/crisis-center.module';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { AuthModule } from './auth/auth.module';



@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ComposeMessageComponent,
    

  ],
  imports: [    
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HeroesModule,
    CrisisCenterModule,
    AdminModule,
    AuthModule,
    AppRoutingModule,
    CrisisCenterRoutingModule,
    AdminRoutingModule,
    
 
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
