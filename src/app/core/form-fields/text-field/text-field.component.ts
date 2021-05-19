import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IFilterConfig } from '../../interfaces/filterField';
import { FormGroup } from "@angular/forms";

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss']
})
export class TextFieldComponent {

  field: IFilterConfig = {title: '', type: 'date'};
  group: any;
  constructor() { }

}
