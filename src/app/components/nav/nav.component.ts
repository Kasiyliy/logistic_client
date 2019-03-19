import { CustomerService } from './../../services/customer.service';
import { Company } from './../../models/company';
import { Customer } from './../../models/customer';
import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
import {AuthService} from '../../services/auth/auth.service';
import {Router} from '@angular/router'; //or updated version
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
      currentCustomer: Customer;
      customers: Customer[] = [];

  constructor(public authService: AuthService, private router: Router, private customerService: CustomerService) {
        this.currentCustomer = JSON.parse(localStorage.getItem('currentCustomer'));
  }

  ngOnInit() {
    $('.header-accountbox-trigger').on('click', () => {
      $('.header-accountbox').slideToggle();
    });

    this.loadAllCustomers();
  }

  private loadAllCustomers() {
    this.customerService.listCustomers().subscribe(customers => {
       this.customers = customers;
      });
}


  logout() {
    this.authService.logout();
  }
    navigateTo(value) {
    if (value) {
        this.router.navigate([value]);
    }
    return false;
}

}
