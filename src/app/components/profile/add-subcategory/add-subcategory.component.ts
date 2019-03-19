import { CategoryService } from './../../../services/category.service';
import { SubCategoryService } from './../../../services/subcategory.service';
import { SubCategory } from './../../../models/subcategory';
import { Component, OnInit } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {environment} from 'src/environments/environment';
import { Router} from '@angular/router';
import { Category } from 'src/app/models/category';



@Component({
  selector: 'app-add-subcategory',
  templateUrl: './add-subcategory.component.html',
  styleUrls: ['./add-subcategory.component.css']
})
export class AddSubcategoryComponent implements OnInit {
  categories: Category[] = [];
  selectedValue = null;
  subcategoryForm: FormGroup;
  constructor(private http: HttpClient, private builder: FormBuilder,
    private subcategoryService: SubCategoryService, private router: Router, private categoryService: CategoryService) {
      this.subcategoryForm = this.builder.group({
        productCategoryId: [null, Validators.required],
        subCategoryAddInfo: [null, Validators.required],
        subCategoryNameEn: [null, Validators.required],
        subCategoryNameKk: [null, Validators.required],
        subCategoryNameRu: [null, Validators.required],
      });
    }

    addSubCategory() {
      const subcategory = new SubCategory();
      subcategory.productCategoryId = parseInt(this.subcategoryForm.get('productCategoryId').value, 10);
      subcategory.subCategoryAddInfo = this.subcategoryForm.get('subCategoryAddInfo').value;
      subcategory.subCategoryNameEn = this.subcategoryForm.get('subCategoryNameEn').value;
      subcategory.subCategoryNameKk = this.subcategoryForm.get('subCategoryNameKk').value;
      subcategory.subCategoryNameRu = this.subcategoryForm.get('subCategoryNameRu').value;
      console.log(subcategory);
      this.subcategoryForm.reset();
      this.subcategoryService.add(subcategory);
      this.router.navigate(['profile']);
    }

  ngOnInit() {
    this.categoryService.listCategories().subscribe(perf => {
      this.categories = perf;
    });
  }

}
