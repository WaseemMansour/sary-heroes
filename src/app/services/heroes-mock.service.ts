import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import data from '../core/data.json';

@Injectable({
  providedIn: 'root'
})
export class HeroesMockService {

  getHeroes() {
    return of(data.heroes)
  }

}
