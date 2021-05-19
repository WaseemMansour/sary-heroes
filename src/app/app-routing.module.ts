import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesListComponent } from './components/heroes/heroes-list/heroes-list.component';
import { HeroesComponent } from './components/heroes/heroes.component';

const routes: Routes = [
  {path: '', component: HeroesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
