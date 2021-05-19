import { Component, Input, OnInit } from '@angular/core';
import { FilterconfigMockService } from 'src/app/services/filterconfig-mock.service';
import { IFilterConfig } from 'src/app/core/interfaces/filterField';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CountriesService } from 'src/app/services/countries.service';
import { ICountry } from 'src/app/core/interfaces/country';

@Component({
  selector: 'app-heroes-filter',
  templateUrl: './heroes-filter.component.html',
  styleUrls: ['./heroes-filter.component.scss']
})
export class HeroesFilterComponent implements OnInit {

  @Input() fields: IFilterConfig[] = [];
  form: FormGroup = new FormGroup({});
  loadedCountries: ICountry[] = [];

  constructor(
    private _filterApi: FilterconfigMockService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private _countriesApi: CountriesService
    ) { }

  ngOnInit(): void {
    this._filterApi.getFilterConfig().subscribe(config => {
      this.fields = config;
      this.form = this.createControl();
    })

    this.route.queryParams
      .subscribe(params => {

        // Not Best Practice
        this._countriesApi.loadedCountries$.subscribe((loadedCountries: ICountry[]) => {
          let paramCountry = loadedCountries.find(country => {
            if(!params.country) return
              return params.country === country.Alpha3Code
          })

          if (paramCountry) {
            const parmasToCountry = {...params, country: paramCountry}
            this.form.patchValue(parmasToCountry)
          }
        });
      }
    );
  }


  createControl(): FormGroup {
    const group = this.fb.group({});
    this.fields.forEach(field => {
      const control = this.fb.control(null, []);
      group.addControl(field.title, control);
    })
    return group;
  }

  get value() {
    return this.form.value;
  }

  onSubmit(e: Event) {
    const { email, name, phone, date, country, company} = this.value;
    const filterParams = {
      name: name,
      phone: phone,
      country: country?.Alpha3Code,
      date: date
    }

    const queryParams: Params = filterParams;
    this.router.navigate(
      [],
      {
        relativeTo: this.route,
        queryParams: queryParams,
        queryParamsHandling: 'merge', // remove to replace all query params by provided
      }
    );
  }
}
