import { Router } from '@angular/router';
import { CountryService } from './../../../services/country.service';
import { Country } from './../../../models/country';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {environment} from 'src/environments/environment';
import {HttpClientModule, HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.css']
})
export class AddCountryComponent implements OnInit {
  countryForm: FormGroup;
   constructor(private http: HttpClient, private builder: FormBuilder,
                      private countryService: CountryService, private router: Router) {
        this.countryForm = this.builder.group({
        countryNameEn: [null, Validators.required],
        countryNameKk: [null, Validators.required],
        countryNameRu: [null, Validators.required],
        });
  }

  addCountry() {
    const country = new Country();
    country.countryNameEn = this.countryForm.get('countryNameEn').value;
    country.countryNameKk = this.countryForm.get('countryNameKk').value;
    country.countryNameRu = this.countryForm.get('countryNameRu').value;
    console.log(country);
    this.countryForm.reset();
    this.countryService.add(country);
    this.router.navigate(['location']);
  }

  ngOnInit() {
  }

}
