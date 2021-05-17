import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Customer } from './customer';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private _http : Http) {

   }
   searchCustomer(cus_id:number):Observable<Customer>{
    return this._http.get("http://localhost:8080/EmployServiceExample/webapi/customer/"+cus_id).
    map((res:Response)=>res.json())
   }
   showCustomer() : Observable<Customer[]> {
    return this._http.get("http://localhost:8080/EmployServiceExample/webapi/customer/").
    map((res:Response)=>res.json())
  }
  
   
  
}
