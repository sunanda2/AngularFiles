import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName:string;
  password:string;

  login() {
    if (this.userName=="sunanda" && this.password=="sunny") {
     this._router.navigate(['/menu']);
    } else {
      alert("Invalid Credentials...");
    }
  }


  constructor(private _router : Router) {
    this.userName="";
    this.password="";
   }

  ngOnInit(): void {
  }

}
