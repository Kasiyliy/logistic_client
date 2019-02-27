import {Component, OnInit} from '@angular/core';

import {HttpClientModule, HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  isCompany = true;

  companyForm = new FormGroup({
    bin: new FormControl('', Validators.required),
    work_phone: new FormControl('', Validators.required),
    mobile_phone: new FormControl('', Validators.required),
    login: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required,),
    repassword: new FormControl('', Validators.required),
  });

  constructor(private http: HttpClient, private builder: FormBuilder) {
  }

  addCompany() {
    alert('Hey there');
  }

  ngOnInit() {
  }

}
