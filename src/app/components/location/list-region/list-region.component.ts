import { RegionService } from './../../../services/region.service';
import { CountryService } from './../../../services/country.service';
import { Region } from './../../../models/region';
import { Country } from './../../../models/country';
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-list-region',
  templateUrl: './list-region.component.html',
  styleUrls: ['./list-region.component.css']
})
export class ListRegionComponent implements OnInit {
  regions: Region[];
  countries: Country[];

  constructor(private router: Router, private regionService: RegionService, private countryService: CountryService) { }

  ngOnInit() {
    this.regionService.listRegions()
    .subscribe( data => {
      this.regions = data;
    });




  }

  addRegion(): void {
    this.router.navigate(['add-region']);

  }
  deleteRegion(region: Region): void {
    console.log(region);
    if (window.confirm('Вы уверены, что хотите удалить?')){
    this.regionService.deleteRegion(region.regionId)
      .subscribe( data => {
        this.regions = this.regions.filter(r => r !== region);
      });
    }
  }

  editRegion(region: Region): void {
    localStorage.removeItem('editRegionId');
    localStorage.setItem('editRegionId', region.regionId.toString());
    this.router.navigate(['edit-region']);

  }




}
