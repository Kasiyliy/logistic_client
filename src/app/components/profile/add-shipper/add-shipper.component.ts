import { ShipperService } from './../../../services/shipper.service';
import { Shipper } from './../../../models/shipper';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-shipper',
  templateUrl: './add-shipper.component.html',
  styleUrls: ['./add-shipper.component.css']
})
export class AddShipperComponent implements OnInit {

  shipperForm: FormGroup;

  constructor(private http: HttpClient, private builder: FormBuilder,
              private shipperService: ShipperService, private router: Router) {
      this.shipperForm = this.builder.group({
        address: [null, Validators.required],
        bin: [null, [Validators.required, Validators.pattern('^[0-9]{12}$')]],
        email: [null, Validators.compose([Validators.required, Validators.email])],
        mobilePhone: [null, Validators.required],
        password: [null, Validators.required],
        phoneNumber: [null, Validators.required],
        shipperNameEn: [null, Validators.required],
        shipperNameKk: [null, Validators.required],
        shipperNameRu: [null, Validators.required],
        username: [null, Validators.required]
      });
    }
    addShipper() {
      const shipper = new Shipper();
      shipper.address = this.shipperForm.get('address').value;
      shipper.bin = this.shipperForm.get('bin').value;
      shipper.email = this.shipperForm.get('email').value;
      shipper.mobilePhone	 = this.shipperForm.get('mobilePhone').value;
      shipper.password = this.shipperForm.get('password').value;
      shipper.phoneNumber = this.shipperForm.get('phoneNumber').value;
      shipper.shipperNameEn = this.shipperForm.get('shipperNameEn').value;
      shipper.shipperNameKk = this.shipperForm.get('shipperNameKk').value;
      shipper.shipperNameRu = this.shipperForm.get('shipperNameRu').value;
      shipper.username = this.shipperForm.get('username').value;

      console.log(shipper);
      this.shipperForm.reset();
      this.shipperService.add(shipper);
      this.router.navigate(['list-shipper']);
    }

  ngOnInit() {
  }

}
