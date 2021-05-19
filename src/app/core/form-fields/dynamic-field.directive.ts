import {
  ComponentFactoryResolver, ComponentRef, Directive, Input, OnInit,
  ViewContainerRef
} from "@angular/core";

import { TextFieldComponent } from './text-field/text-field.component';
import { DropdownFieldComponent } from './dropdown-field/dropdown-field.component';
import { DateFieldComponent } from './date-field/date-field.component';
import { IFilterConfig } from "../interfaces/filterField";
import { FormGroup } from "@angular/forms";

const componentMapper: any = {
  text: TextFieldComponent,
  dropdown: DropdownFieldComponent,
  date: DateFieldComponent
}

@Directive({
  selector: '[appDynamicField]'
})

export class DynamicFieldDirective implements OnInit {

  @Input() field: IFilterConfig = {title: '', type: ''};
  @Input() group: FormGroup = new FormGroup({});
  componentRef: any;

  constructor(private resolver: ComponentFactoryResolver, private container: ViewContainerRef) { }

  ngOnInit(): void {
    const factory = this.resolver.resolveComponentFactory(
      componentMapper[this.field.type]
    );

    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.group = this.group;
    this.componentRef.instance.field = this.field;

    if (this.field.api) {
      this.componentRef.instance.api = this.field.api;
    }

    if (this.field.multiple) {
      this.componentRef.instance.multiple = this.field.multiple;
    }
  }
}
