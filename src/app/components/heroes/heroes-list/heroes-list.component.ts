import { Component, OnDestroy, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
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

  ngOnDestroy(): void {
    this.heroesSubsciption.unsubscribe();
  }

}
