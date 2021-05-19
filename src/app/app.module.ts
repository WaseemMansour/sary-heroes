import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';

import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './components/app/app.component';
import { HeroesListComponent } from './components/heroes/heroes-list/heroes-list.component';
import { HeroesFilterComponent } from './components/heroes/heroes-filter/heroes-filter.component';
import { HeroesComponent } from './components/heroes/heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesListComponent,
    HeroesFilterComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
