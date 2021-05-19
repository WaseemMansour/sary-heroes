import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { CountriesService } from 'src/app/services/countries.service';
import { ICountry } from '../../interfaces/country';
import { IFilterConfig } from '../../interfaces/filterField';

@Component({
  selector: 'app-dropdown-field',
  templateUrl: './dropdown-field.component.html',
  styleUrls: ['./dropdown-field.component.scss']
})
export class DropdownFieldComponent implements OnInit {

  private apiItems = new BehaviorSubject<ICountry[] | any>([]);
  items$ = this.apiItems.asObservable();
  group: any;
  api: string = '';
  field: IFilterConfig = {title: '', type: 'date'};
  selectedItem: {Name: string, Alpha3Code: string} = {Name: '', Alpha3Code: ''};

  constructor(private _countriesApi: CountriesService) {}

  ngOnInit(): void {
    this._countriesApi.getCountrie(this.api).subscribe(countries => {
      this.apiItems.next(countries);
      const initValue = this.group.get(this.field.title).value;
      if(initValue) this.selectedItem = initValue;
    })
  }

  onDropDownChange(e: Event) {
    this.selectedItem = this.group.get(this.field.title).value;
  }

}
