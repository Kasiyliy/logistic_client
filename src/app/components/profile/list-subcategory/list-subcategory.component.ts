import { Router } from '@angular/router';
import { SubCategoryService } from './../../../services/subcategory.service';
import { SubCategory } from './../../../models/subcategory';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from './../../../services/category.service';

@Component({
  selector: 'app-list-subcategory',
  templateUrl: './list-subcategory.component.html',
  styleUrls: ['./list-subcategory.component.css']
})
export class ListSubcategoryComponent implements OnInit {
  subcategories: SubCategory[];
  categories: Category[];

  constructor(private router: Router, private subcategoryService: SubCategoryService, private categoryService: CategoryService) { }

  ngOnInit() {
    this.subcategoryService.listSubCategories()
    .subscribe( data => {
      this.subcategories = data;
    });

    this.categoryService.listCategories().subscribe(categories => {
      this.categories = categories;
    });


  }

  addSubCategory(): void {
    this.router.navigate(['add-subcategory']);

  }
  deleteSubCategory(subcategory: SubCategory): void {
    console.log(subcategory);
    if (window.confirm('Вы уверены, что хотите удалить?')){
    this.subcategoryService.deleteSubCategory(subcategory.productSubcategoryId)
      .subscribe( data => {
        this.subcategories = this.subcategories.filter(s => s !== subcategory);
      })
    }
  }

  editSubCategory(subcategory: SubCategory): void {
    localStorage.removeItem('editSubCategoryId');
    localStorage.setItem('editSubCategoryId', subcategory.productSubcategoryId.toString());
    this.router.navigate(['edit-subcategory']);

  }




}
