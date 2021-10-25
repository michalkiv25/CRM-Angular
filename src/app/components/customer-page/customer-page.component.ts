import { Component } from '@angular/core';
import { customer } from '../../customer.model';
import { DisplayModesEnum } from './display-modes.enum';
import { CustomersService } from './customers.service';

@Component({
  selector: 'app-customer-page',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.css']
})
export class CustomerPageComponent {
  displayMode: DisplayModesEnum = DisplayModesEnum.table;//Head to the department, more focused on the table
  DisplayModes = DisplayModesEnum; //   Contact the department
  customers: customer[];
  currentCustomer: customer; //קלאס ראשונה מלמטה

  createCustomer() {// add
    this.service.addCustomer(this.currentCustomer);
    this.displayMode = DisplayModesEnum.table;
  }

  editCustomer(customerToEdit: customer) {
    this.displayMode = DisplayModesEnum.edit;
    this.currentCustomer = customerToEdit; //Leave me data in the box, before the change
  }

  updateCustomer() {
    this.service.updateCustomer(this.currentCustomer);
    this.displayMode = DisplayModesEnum.table;
  }

  displayCustomerDetails(customerToDisplay: customer) {
    this.currentCustomer = customerToDisplay;
    this.displayMode = DisplayModesEnum.details;
  }

  removeCustomer(customerToRemove: customer) {
    if (confirm('Are you sure? ')) {
      this.service.removeCust(customerToRemove);
    }
  }

  addCustomer() {
    this.currentCustomer = new customer();
    this.displayMode = DisplayModesEnum.add;
  }
  constructor(private service: CustomersService) {
    service.getCustomers(data => {
      this.customers = data;   //Puts all the giving basis into the array
    });
  }


//Search
  searchFirst: string;
  searchLast: string;
  searchPhone: string;
  searchEmail:string;

  filterCustomer(customer) {
    return (
      NotMatch(this.searchFirst, customer.first) ||
      NotMatch(this.searchLast, customer.last) ||
      NotMatch(this.searchPhone, customer.phone)||
      NotMatch(this.searchEmail, customer.email)
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
