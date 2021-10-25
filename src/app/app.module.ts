import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CustomerPageComponent } from './components/customer-page/customer-page.component';
import { CustomersTableIcons } from './components/customers-table-icons.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AddEditDisplayCustomerComponent } from './components/customer-page/add-edit-display-customer/add-edit-display-customer.component';
import { RouterModule } from '@angular/router';
import { ContactsPageComponent } from './components/contacts-page/contacts-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import {AngularFireAuthGuard, AngularFireAuthGuardModule} from "@angular/fire/compat/auth-guard";


// Previous of the database - configuration
const firebaseConfig = {
  apiKey: "AIzaSyDk4InBT-AW8apLOTcEhva-F8xw7Aiuooo",
  authDomain: "customersanscontacts.firebaseapp.com",
  databaseURL: "https://customersanscontacts-default-rtdb.firebaseio.com",
  projectId: "customersanscontacts",
  storageBucket: "customersanscontacts.appspot.com",
  messagingSenderId: "871330473244",
  appId: "1:871330473244:web:0e105e317c0fd85b6dc6d9",
  measurementId: "G-DDGGJFRQML"
};

@NgModule({
  imports: [
    AngularFireAuthGuardModule,
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    // Quick access to pages and also to look beautiful in url
    RouterModule.forRoot([
      {
        path: 'customers',
        component: CustomerPageComponent,
        canActivate: [AngularFireAuthGuard]// Allows entry with the guard
      },
      {
        path: 'contacts',
        component: ContactsPageComponent,
        canActivate: [AngularFireAuthGuard]// Allows entry with the guard
      },
      {
        path: 'login',
        component: LoginPageComponent//  Free admission for all
        //The name of the department of the Compananote
      },
      {
        path: '**',
        redirectTo: 'login' // 404 page
      }
    ])
  ],
  declarations: [
    AppComponent,
    CustomersTableIcons,
    CustomerPageComponent,
    AddEditDisplayCustomerComponent,
    ContactsPageComponent,
    LoginPageComponent
  ],
  bootstrap: [AppComponent],

})
export class AppModule {}
