import { Country } from './../../../models/country';
import { Region } from './../../../models/region';
import { RegionService } from './../../../services/region.service';
import { CountryService } from './../../../services/country.service';
import { Component, OnInit } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {environment} from 'src/environments/environment';
import { Router} from '@angular/router';



@Component({
  selector: 'app-add-region',
  templateUrl: './add-region.component.html',
  styleUrls: ['./add-region.component.css']
})
export class AddRegionComponent implements OnInit {
  countries: Country[] = [];
  selectedValue = null;
  regionForm: FormGroup;
  constructor(private http: HttpClient, private builder: FormBuilder,
    private regionService: RegionService, private router: Router, private countryService: CountryService) {
      this.regionForm = this.builder.group({
        countryId: [null, Validators.required],
        regionNameEn: [null, Validators.required],
        regionNameKk: [null, Validators.required],
        regionNameRu: [null, Validators.required],
      });
    }

    addRegion() {
      const region = new Region();
      region.countryId = this.regionForm.get('countryId').value;
      region.regionNameEn = this.regionForm.get('regionNameEn').value;
      region.regionNameKk = this.regionForm.get('regionNameKk').value;
      region.regionNameRu = this.regionForm.get('regionNameRu').value;
      console.log(region);
      this.regionForm.reset();
      this.regionService.add(region);
      this.router.navigate(['list-region']);
    }

  ngOnInit() {
    this.countryService.listCountries().subscribe(perf => {
      this.countries = perf;
    });
  }

}
