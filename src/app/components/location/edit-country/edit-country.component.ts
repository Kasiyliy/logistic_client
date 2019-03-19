import { CountryService } from './../../../services/country.service';
import { Country } from './../../../models/country';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {first} from 'rxjs/operators';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-country',
  templateUrl: './edit-country.component.html',
  styleUrls: ['./edit-country.component.css']
})
export class EditCountryComponent implements OnInit {
    country: Country;
    editFormCountry: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private countryService: CountryService) { }

  ngOnInit() {
    const cId = parseInt(localStorage.getItem('editCountryId'), 10 );
    if (!cId) {
      alert('Invalid action.');
      this.router.navigate(['location']);
      return;
    }
    this.editFormCountry = this.formBuilder.group({
      countryId: [],
      countryNameEn: ['', Validators.required],
      countryNameKk: ['', Validators.required],
      countryNameRu: ['', Validators.required],
    });

    this.countryService.getCountryById(+cId)
      .subscribe( data => {
        const country = new Country();
        country.countryId = data.countryId;
        country.countryNameEn = data.countryName.en;
        country.countryNameKk = data.countryName.kk;
        country.countryNameRu = data.countryName.ru;
        this.editFormCountry.setValue(country);
      });
  }

  onSubmit() {
    this.countryService.updateCountry(this.editFormCountry.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['location']);
        },
        error => {
          alert(error);
        });
  }



}
