import { Characteristic } from './../../../models/characteristic';
import { CharacteristicService } from './../../../services/characteristic.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-characterisics',
  templateUrl: './list-characterisics.component.html',
  styleUrls: ['./list-characterisics.component.css']
})
export class ListCharacterisicsComponent implements OnInit {
  charasteristics: Characteristic[];
  constructor(private router: Router, private characteristicService: CharacteristicService) { }

  ngOnInit() {
    this.characteristicService.listCharacteristics()
    .subscribe( data => {
      this.charasteristics = data;
    });
  }

  addCharacteristic(): void {
    this.router.navigate(['add-characteristic']);

  }







}

