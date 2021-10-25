import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { customer } from '../../customer.model';

const customersList = 'customers';
@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  constructor(private db: AngularFireDatabase) {}

  // Take data from the database
  getCustomers(callback) {
    this.getList()
      .snapshotChanges()
      .subscribe(data => { 
        let newArray = [];

        data.map((item: any) => {
          let newItem = item.payload.val();
          newItem.key = item.payload.key;
          newArray.push(newItem);
        });
        callback(newArray);
      });
  }

  removeCust(cust: customer) {//Information from the array
    this.getList('/' + cust.key).remove();  //Function of the database
  }
  addCustomer(cust: customer) {
    this.getList().push(cust);
  }
  updateCustomer(cust: customer) {
    this.getObject(cust.key).update(cust);
  }

  private getList(key = '') {
    return this.db.list(customersList + key);
  }
  private getObject(key) {
    return this.db.object(customersList + '/' + key);
  }



}
