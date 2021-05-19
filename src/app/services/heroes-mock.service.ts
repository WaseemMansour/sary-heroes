import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import data from '../core/data.json';
import { IHero } from '../core/interfaces/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroesMockService {

  getHeroes(): Observable<IHero[]> {
    return of(data.heroes)
  }

}
