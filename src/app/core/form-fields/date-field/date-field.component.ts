import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IFilterConfig } from '../../interfaces/filterField';

@Component({
  selector: 'app-date-field',
  templateUrl: './date-field.component.html',
  styleUrls: ['./date-field.component.scss']
})
export class DateFieldComponent {
  value: string = '';
  field: IFilterConfig = {title: '', type: 'text'};
  group: any;
  constructor() { }

}
