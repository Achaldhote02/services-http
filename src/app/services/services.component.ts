import { Component, OnInit } from '@angular/core';
import { EmpServicesService } from '../emp-services.service';

@Component({
  selector: 'app-services',
  template: `
    <h2>Employee List From Services Componant</h2>
    <ul *ngFor="let emp of employee1">
      <li>{{ emp.name }}</li>
    </ul>
    <h2>{{ errorMsg }}</h2>
    <h2>Employee List From DI</h2>
    <ul *ngFor="let emp of employee2">
      <li>{{ emp.name }}</li>
    </ul>
  `,
  styles: [],
})
// --------------------------------------------------------------------------------- //

export class ServicesComponent implements OnInit {
  public employee1 = [
    { id: 1, name: 'Soni', age: 30 }, //hard coded array
    { id: 2, name: 'Ganesh', age: 29 },
    { id: 3, name: 'Achal', age: 28 },
    { id: 4, name: 'Diksha', age: 26 },
    { id: 5, name: 'Dushyal', age: 22 },
  ];
  // --------------------------------------------------------------------------------- //

  public employee2 = [];
  public errorMsg;
  constructor(private _empService: EmpServicesService) {
    // this.employee2 = _empService.getEmployees();
  }
// --------------------------------------------------------------------------------- //

  ngOnInit(): void {
    // this._empService
    //   .getEmployees()
    //   .subscribe((data) => (this.employee2 = data));//1 solution
    this._empService.getEmployees().subscribe(
      (data) => (this.employee2 = data),
      (error) => (this.errorMsg = error)
    );

    // var empObservable = this._empService.getEmployees();//2 solution
    // empObservable.subscribe((data) => (this.employee2 = data));
    // --------------------------------------------------------------------------------- //

  }
}
