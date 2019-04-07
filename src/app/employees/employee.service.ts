import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable()
export class EmployeeService {

    private listEmployees: Employee[] = [
        {
          id: 1,
          name: 'Monkey D. Luffy',
          gender: 'male',
          contactPreference: 'email',
          email: 'luffy@gmail.com',
          dateOfBirth: new Date('10/25/1988'),
          department: '3',
          isActive: true,
          photoPath: 'assets/images/luffy.jfif'
        },
        {
          id: 2,
          name: 'Roronoa Zoro',
          gender: 'male',
          contactPreference: 'email',
          email: 'zoro@gmail.com',
          dateOfBirth: new Date('10/26/1988'),
          department: '3',
          isActive: true,
          photoPath: 'assets/images/zoro.png'
        },
        {
          id: 2,
          name: 'Vinsmoke Sanji',
          gender: 'male',
          contactPreference: 'email',
          email: 'sanji@gmail.com',
          dateOfBirth: new Date('10/27/1988'),
          department: '2',
          isActive: true,
          photoPath: 'assets/images/sanji.png'
        }
      ];

    getEmployees(): Employee[] {
        return this.listEmployees;
    }

    save(employee: Employee) {
        this.listEmployees.push(employee);
    }
}