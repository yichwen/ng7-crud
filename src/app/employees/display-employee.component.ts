import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit, OnChanges {

  @Input() employee: Employee;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    const previousEmployee = <Employee>changes.employee.previousValue;
    const currentEmployee = <Employee>changes.employee.currentValue;
    if (previousEmployee) {
      console.log('Previous: ' + previousEmployee.name);
    } else {
      console.log('Previous: NULL');
    }
    console.log('Current: ' + currentEmployee.name);
  }

}
