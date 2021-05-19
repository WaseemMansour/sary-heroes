import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { ICountry } from '../core/interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private loadedCountries = new BehaviorSubject<ICountry[] | any>([]);
  loadedCountries$ = this.loadedCountries.asObservable();

  constructor(private _http: HttpClient) { }

  getCountrie(apiUrl: string): Observable<ICountry[]> {
    return this._http.get<ICountry[]>(apiUrl)
      .pipe(
        map(response => response['Response'].map((country: ICountry) => {
          return {Name: country.Name, Alpha3Code: country.Alpha3Code}
        })),
        tap(countries => this.loadedCountries.next(countries))
      )
  }
}
