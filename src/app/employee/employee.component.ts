import { Component } from '@angular/core';
import { IEmployee } from '../Modules/IEmployee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  Employees:IEmployee[]=[
    {
      ID:1,
      Name:"Alaa",
      Salary:10000,
      Address:"Minia",
      Department:"CS"


        },
        {
          ID:2,
      Name:"Mohamed",
      Salary:400,
      Address:"Maghagha",
      Department:"IS"
          }
          ,
        {
          ID:3,
      Name:"Tamer",
      Salary:5000,
      Address:"Mallawy",
      Department:"IT"
          }
          ,
        {
          ID:4,
      Name:"Maha",
      Salary:4000,
      Address:"Edwaa",
      Department:"CS"
          }
          ,
        {
          ID:1,
      Name:"Reda",
      Salary:6000,
      Address:"Minia",
      Department:"IS"
          }
  ];
}
