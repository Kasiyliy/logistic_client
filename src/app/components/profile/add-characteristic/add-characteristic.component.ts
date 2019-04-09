import { Router } from '@angular/router';
import { CharacteristicService } from './../../../services/characteristic.service';
import { Characteristic } from './../../../models/characteristic';
import { Component, OnInit } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-characteristic',
  templateUrl: './add-characteristic.component.html',
  styleUrls: ['./add-characteristic.component.css']
})
export class AddCharacteristicComponent implements OnInit {
  characteristicForm: FormGroup;

  constructor(private http: HttpClient, private builder: FormBuilder,
              private characteristicService: CharacteristicService, private router: Router) {
      this.characteristicForm = this.builder.group({
        addInfo: [null, Validators.required],
        characteristicNameEn: [null, Validators.required],
        characteristicNameKk: [null, Validators.required],
        characteristicNameRu: [null, Validators.required],
      });
    }
    addCharacteristic() {
      const characteristic = new Characteristic();
      characteristic.addInfo = this.characteristicForm.get('addInfo').value;
      characteristic.characteristicNameEn = this.characteristicForm.get('characteristicNameEn').value;
      characteristic.characteristicNameKk = this.characteristicForm.get('characteristicNameKk').value;
      characteristic.characteristicNameRu = this.characteristicForm.get('characteristicNameRu').value;
      console.log(characteristic);
      this.characteristicForm.reset();
      this.characteristicService.add(characteristic);
      this.router.navigate(['profile']);
    }

  ngOnInit() {
  }

}
