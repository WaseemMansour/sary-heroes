import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './components/app/app.component';
import { HeroesListComponent } from './components/heroes/heroes-list/heroes-list.component';
import { HeroesFilterComponent } from './components/heroes/heroes-filter/heroes-filter.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { TextFieldComponent } from './core/form-fields/text-field/text-field.component';
import { DropdownFieldComponent } from './core/form-fields/dropdown-field/dropdown-field.component';
import { DateFieldComponent } from './core/form-fields/date-field/date-field.component';
import { DynamicFieldDirective } from './core/form-fields/dynamic-field.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeroesListComponent,
    HeroesFilterComponent,
    HeroesComponent,
    TextFieldComponent,
    DropdownFieldComponent,
    DateFieldComponent,
    DynamicFieldDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    TableModule,
    CalendarModule,
    DropdownModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
