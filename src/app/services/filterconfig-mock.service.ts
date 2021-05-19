import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import data from '../core/data.json';
import { IFilterConfig } from '../core/interfaces/filterField';

@Injectable({
  providedIn: 'root'
})
export class FilterconfigMockService {

  getFilterConfig(): Observable<IFilterConfig[]> {
    return of(data.filterConfig)
  }
}
