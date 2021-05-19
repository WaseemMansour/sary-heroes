import { Component, OnDestroy, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { IHero } from 'src/app/core/interfaces/hero';
import { HeroesMockService } from 'src/app/services/heroes-mock.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent implements OnInit, OnDestroy {

  heroes: IHero[] = [];
  cols: any[] = [];

  isFilterOpen = true;
  @Output() filterIsOpened = new EventEmitter();

  heroesSubsciption = new Subscription();

  constructor(private _heroesApi: HeroesMockService) { }

  ngOnInit(): void {

    this.heroesSubsciption = this._heroesApi.getHeroes().subscribe(heroes => {
      this.heroes = heroes;
    });

    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'phone', header: 'Phone' },
      { field: 'email', header: 'Email' },
      { field: 'date', header: 'Date' },
      { field: 'country', header: 'Country' },
      { field: 'company', header: 'Company' },
    ];
  }

  toggleFilter() {
    this.isFilterOpen = !this.isFilterOpen;
    this.filterIsOpened.emit(this.isFilterOpen);
  }

  ngOnDestroy(): void {
    this.heroesSubsciption.unsubscribe();
  }

}
