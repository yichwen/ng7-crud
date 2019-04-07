import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { SelectRequiredValidatorDirective } from './shared/select-required-validator.directive';
import { ConfirmEqualValidatorDirective } from './shared/confirm-equal-validator.directive';
import { EmployeeService } from './employees/employee.service';
import { DisplayEmployeeComponent } from './employees/display-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    ListEmployeesComponent,
    SelectRequiredValidatorDirective,
    ConfirmEqualValidatorDirective,
    DisplayEmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
