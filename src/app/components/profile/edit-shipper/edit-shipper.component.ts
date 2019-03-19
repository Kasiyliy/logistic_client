import { Shipper } from './../../../models/shipper';
import { Router } from '@angular/router';
import { ShipperService } from 'src/app/services/shipper.service';
import { Component, OnInit } from '@angular/core';
import {first} from 'rxjs/operators';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-edit-shipper',
  templateUrl: './edit-shipper.component.html',
  styleUrls: ['./edit-shipper.component.css']
})
export class EditShipperComponent implements OnInit {
  shipper: Shipper;
  editFormShipper: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private shipperService: ShipperService) { }

  ngOnInit() {
    const shipId = parseInt(localStorage.getItem('editShipperId'), 10 );
    if (!shipId) {
      alert('Invalid action.');
      this.router.navigate(['list-shipper']);
      return;
    }
    this.editFormShipper = this.formBuilder.group({
      shipperId: [],
      address: ['', Validators.required],
      bin: ['', Validators.required],
      email: ['', Validators.required],
      mobilePhone: ['', Validators.required],
      loginPassword: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      shipperNameEn: ['', Validators.required],
      shipperNameKk: ['', Validators.required],
      shipperNameRu: ['', Validators.required],
      loginName: ['', Validators.required]
    });
    this.shipperService.getShipperById(+shipId)
      .subscribe( data => {
        const shipper = new Shipper();
        shipper.shipperId = data.shipperId;
        shipper.address = data.address;
        shipper.bin = data.bin;
        shipper.email = data.email;
        shipper.phoneNumber = data.phoneNumber;
        shipper.mobilePhone = data.mobilePhone;
        shipper.loginPassword = data.loginPassword;
        shipper.shipperNameEn = data.shipperName.en;
        shipper.shipperNameKk = data.shipperName.kk;
        shipper.shipperNameRu = data.shipperName.ru;
        shipper.loginName = data.loginName;
        this.editFormShipper.setValue(shipper);
      });

}
onSubmit() {
  this.shipperService.updateShipper(this.editFormShipper.value)
    .pipe(first())
    .subscribe(
      data => {
        this.router.navigate(['list-shipper']);
      },
      error => {
        alert(error);
      });
  this.router.navigate(['list-shipper']);
}


    }
