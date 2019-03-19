import { Shipper } from './../../../models/shipper';
import { ShipperService } from './../../../services/shipper.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-list-shipper',
  templateUrl: './list-shipper.component.html',
  styleUrls: ['./list-shipper.component.css']
})
export class ListShipperComponent implements OnInit {
  shippers: Shipper[];
  constructor(private router: Router, private shipperService: ShipperService) { }

  ngOnInit() {
    this.shipperService.listShippers()
    .subscribe( data => {
      this.shippers = data;
    });
  }

  addShipper(): void {
    this.router.navigate(['add-shipper']);

  }

  deleteShipper(shipper: Shipper): void {
    if (window.confirm('Вы уверены, что хотите удалить?')) {
    this.shipperService.deleteShipper(shipper.shipperId)
      .subscribe( data => {
        this.shippers = this.shippers.filter(s => s !== shipper);
      });
    }
  }

  editShipper(shipper: Shipper): void {
    localStorage.removeItem('editShipperId');
    localStorage.setItem('editShipperId', shipper.shipperId.toString());
    this.router.navigate(['edit-shipper']);
  }









}
