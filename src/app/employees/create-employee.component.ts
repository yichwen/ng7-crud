import { Component, OnInit } from '@angular/core';
import { Department } from '../models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = {
    id: null,
    name: null,
    gender: null,
    contactPreference: null,
    phoneNumber: null,
    email: null,
    dateOfBirth: null,
    department: 'select',
    isActive: null,
    photoPath: null,
    password: null,
    confirmPassword: null
  };
  previewPhoto = false;
  gender = 'male';
  isActive = true;
  datePickerConfig: Partial<BsDatepickerConfig>;
  dateOfBirth = new Date(2018, 0, 30);

  departments: Department[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'IT' },
    { id: 3, name: 'HR' },
    { id: 4, name: 'Payroll' }
  ];

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) { 
    this.datePickerConfig = Object.assign({}, { 
      containerClass: 'theme-dark-blue',
      showWeekNumbers: false,
      minDate: new Date(2018, 0, 1),
      maxDate: new Date(2018, 11, 31),
      dateInputFormat: 'DD/MM/YYYY'
    });
  }

  ngOnInit() {
  }

  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }

  saveEmployee(): void {
    this.employeeService.save(this.employee);
    this.router.navigate(['list']);
  }
}
