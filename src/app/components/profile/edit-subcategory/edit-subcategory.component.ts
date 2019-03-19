import { CategoryService } from './../../../services/category.service';
import { Router } from '@angular/router';
import { SubCategory } from 'src/app/models/subcategory';
import { SubCategoryService } from 'src/app/services/subcategory.service';
import { Component, OnInit } from '@angular/core';
import {first} from 'rxjs/operators';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Category } from 'src/app/models/category';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-edit-subcategory',
  templateUrl: './edit-subcategory.component.html',
  styleUrls: ['./edit-subcategory.component.css']
})
export class EditSubcategoryComponent implements OnInit {
  editFormSubCategory: FormGroup;
  categories: Category[];
  subcategory: SubCategory;

  constructor(private formBuilder: FormBuilder, private router: Router,
              private subcategoryService: SubCategoryService, private categoryService: CategoryService,
              private toastrService: ToastrService) { }

  ngOnInit(): void  {

    const subcategoryId = parseInt(localStorage.getItem('editSubCategoryId'), 10 );
    if (!subcategoryId) {
      alert('Invalid action.');
      this.router.navigate(['list-subcategory']);
      return;
    }
    this.editFormSubCategory = this.formBuilder.group({
      productSubcategoryId: [null],
      productCategoryId: [null, Validators.required],
      subCategoryAddInfo: ['', Validators.required],
      subCategoryNameEn: ['', Validators.required],
      subCategoryNameRu: ['', Validators.required],
      subCategoryNameKk: ['', Validators.required],
    });

    this.categoryService.listCategories().subscribe(categories => {
      this.categories = categories;
    });



    this.subcategoryService.getSubCategoryById(subcategoryId)
      .subscribe( data => {
        const subcategory = new SubCategory();
        subcategory.productSubcategoryId = data.productSubcategoryId;
        subcategory.productCategoryId = data.productCategoryId;
        subcategory.subCategoryAddInfo = data.subCategoryAddInfo;
        subcategory.subCategoryNameEn = data.subcategoryName.en;
        subcategory.subCategoryNameRu = data.subcategoryName.ru;
        subcategory.subCategoryNameKk = data.subcategoryName.kk;
        this.editFormSubCategory.setValue(subcategory);
      });
  }



  onSubmit() {
    this.subcategoryService.updateSubCategory(this.editFormSubCategory.value)
    .pipe(first())
    .subscribe(
      data => {
        this.router.navigate(['list-subcategory']);
      },
      error => {
        alert(error);
      });
  }



}
