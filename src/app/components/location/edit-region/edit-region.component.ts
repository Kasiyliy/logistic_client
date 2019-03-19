import { Country } from './../../../models/country';
import { RegionService } from './../../../services/region.service';
import { Region } from './../../../models/region';
import { CountryService } from './../../../services/country.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {first} from 'rxjs/operators';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-edit-region',
  templateUrl: './edit-region.component.html',
  styleUrls: ['./edit-region.component.css']
})
export class EditRegionComponent implements OnInit {
  editFormRegion: FormGroup;
  countries: Country[];
  region: Region;

  constructor(private formBuilder: FormBuilder, private router: Router,
              private regionService: RegionService, private countryService: CountryService,
              private toastrService: ToastrService) { }

  ngOnInit(): void  {

    const regId = parseInt(localStorage.getItem('editRegionId'), 10 );
    if (!regId) {
      alert('Invalid action.');
      this.router.navigate(['list-region']);
      return;
    }
    this.editFormRegion = this.formBuilder.group({
      regionId: [null],
      countryId: [null, Validators.required],
      regionNameEn: ['', Validators.required],
      regionNameKk: ['', Validators.required],
      regionNameRu: ['', Validators.required],
    });

    this.countryService.listCountries().subscribe(countries => {
      this.countries = countries;
    });



    this.regionService.getRegionById(regId)
      .subscribe( data => {
        const region = new Region();
        region.regionId = data.regionId;
        region.countryId = data.countryId;
        region.regionNameEn = data.regionName.en;
        region.regionNameKk = data.regionName.kk;
        region.regionNameRu = data.regionName.ru;
        this.editFormRegion.setValue(region);
      });
  }



  onSubmit() {
    this.regionService.updateRegion(this.editFormRegion.value)
    .pipe(first())
    .subscribe(
      data => {
        this.router.navigate(['list-region']);
      },
      error => {
        alert(error);
      });
  }



}
