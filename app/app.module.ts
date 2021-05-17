import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { EmployComponent } from './employ/employ.component';
import { CustomerComponent } from './customer/customer.component';
import { EmploySearchComponent } from './employ-search/employ-search.component';
import { FormsModule } from '@angular/forms';
import { CustomerSearchComponent } from './customer-search/customer-search.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
const appRoutes : Routes = [
  {path:'',component:LoginComponent},
  {path:'menu',component:MenuComponent,
  children : [
    {path:'User',component:UserComponent,outlet:'data'},
    {path:'UserSearch',component:UserSearchComponent,outlet:'data'},
    {path:'Customer',component:CustomerComponent,outlet:'data'},
    {path:'CustomerSearch',component:CustomerSearchComponent,outlet:'data'},
    {path:'Employ',component:EmployComponent,outlet:'data'},
    {path:'EmploySearch',component:EmploySearchComponent,outlet:'data'},
     ]

}
]
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    EmployComponent,
    CustomerComponent,
    EmploySearchComponent,
    CustomerSearchComponent,
    UserSearchComponent,
    MenuComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
