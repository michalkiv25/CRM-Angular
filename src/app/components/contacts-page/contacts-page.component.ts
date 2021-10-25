import { Component, OnInit } from '@angular/core';
import { DisplayModesEnum } from '../customer-page/display-modes.enum';
import { customer } from '../../customer.model';
import { CustomersService } from '../customer-page/customers.service';



@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.css']
})
export class ContactsPageComponent {
  displayMode: DisplayModesEnum = DisplayModesEnum.table;
  DisplayModes = DisplayModesEnum;  
  customers: customer[];
  currentCustomer: customer; 

  createCustomer() {// add
    this.service.addCustomer(this.currentCustomer);
    this.displayMode = DisplayModesEnum.table;
  }
  addCustomer() {
    this.currentCustomer = new customer();
    this.displayMode = DisplayModesEnum.add;
  }
  constructor(private service: CustomersService) {
    service.getCustomers(data => {
      this.customers = data;  
    });
  }

//Search
  searchFirst: string;
  filterCustomer(customer) {
    return (
      NotMatch(this.searchFirst, customer.first)
    );
    function NotMatch(
      textFromFilerTextBox: string,
      dataFromCustomerObject: string
    ) {
      return (
        textFromFilerTextBox &&
        dataFromCustomerObject.indexOf(textFromFilerTextBox) == -1
      );
  }
}

}