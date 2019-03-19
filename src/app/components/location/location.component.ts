import { Region } from './../../models/region';
import { Country } from './../../models/country';
import { CountryService } from './../../services/country.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  countries: Country[];



  constructor(private router: Router, private countryService: CountryService) { }

  ngOnInit() {
    this.countryService.listCountries()
    .subscribe( data => {
      this.countries = data;
    });
  }


  addCountry(): void {
    this.router.navigate(['add-country']);

  }

  deleteCountry(country: Country): void {
    if (window.confirm('Вы уверены, что хотите удалить?')) {
    this.countryService.deleteCountry(country.countryId)
      .subscribe( data => {
        this.countries = this.countries.filter(c => c !== country);
      });
    }
  }

  editCountry(country: Country): void {
    localStorage.removeItem('editCountryId');
    localStorage.setItem('editCountryId', country.countryId.toString());
    this.router.navigate(['edit-country']);
  }

}
