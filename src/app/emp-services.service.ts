import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './emp';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
// --------------------------------------------------------------------------------- //

@Injectable({
  providedIn: 'root',
})
// --------------------------------------------------------------------------------- //
export class EmpServicesService {
  private _url: string = '/assets/data/data.json'; //json file create and get url
  // --------------------------------------------------------------------------------- //

  constructor(private http: HttpClient) {} //const. parameter
  // --------------------------------------------------------------------------------- //

  getEmployees(): Observable<IEmployee[]> {
    //method // obs->return type
    return this.http
      .get<IEmployee[]>(this._url)
      .pipe(retry(1), catchError(this.errorHandler)); //response  return//url parameter pass//<> generic class used//catch operator as an
  }
  // --------------------------------------------------------------------------------- //
  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
// --------------------------------------------------------------------------------- //
