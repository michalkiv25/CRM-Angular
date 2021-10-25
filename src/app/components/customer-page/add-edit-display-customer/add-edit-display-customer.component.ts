// Component of the form itself, which can be updated to add and compensate

import { Component, Input, OnInit } from '@angular/core';
import { customer } from '../../../customer.model';

@Component({
  selector: 'app-add-edit-display-customer',
  templateUrl: './add-edit-display-customer.component.html',
  styleUrls: ['./add-edit-display-customer.component.css']
})
export class AddEditDisplayCustomerComponent {
  @Input() customer: customer = new customer(); //Brings the keys from the cusomer.model component
  @Input() disabled; //Makes gray that it will not be possible to write just to watch
}
