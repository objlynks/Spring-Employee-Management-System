import { Component } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
          
          employees: Employee[];
          constructor(){}


            ngOnInit(): void {
              this.employees = [{
                "id": 1,
                "lastName" : "John",
                "firstName": "Doe",
                "emailId" : "johndoe12@gmail.com"
              },
              {
                "id": 2,
                "lastName" : "Doe",
                "firstName": "John",
                "emailId" : "doejoh@gmail.com"
              }
            ]
            }
          
}
