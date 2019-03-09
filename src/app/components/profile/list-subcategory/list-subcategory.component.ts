import { Router } from '@angular/router';
import { SubCategoryService } from './../../../services/subcategory.service';
import { SubCategory } from './../../../models/subcategory';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-list-subcategory',
  templateUrl: './list-subcategory.component.html',
  styleUrls: ['./list-subcategory.component.css']
})
export class ListSubcategoryComponent implements OnInit {
  subcategories: SubCategory[];
  constructor(private router: Router, private subcategoryService: SubCategoryService) { }

  ngOnInit() {
    this.subcategoryService.listSubCategories()
    .subscribe( data => {
      this.subcategories = data;
    });
  }

  addSubCategory(): void {
    this.router.navigate(['add-subcategory']);

  }

}
