import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { Component, OnInit } from '@angular/core';
import {first} from 'rxjs/operators';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
    category: Category;
    editFormCategory: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private categoryService: CategoryService) { }

  ngOnInit() {
    const categoryId = parseInt(localStorage.getItem('editCategoryId'), 10 );
    if (!categoryId) {
      alert('Invalid action.');
      this.router.navigate(['list-category']);
      return;
    }
    this.editFormCategory = this.formBuilder.group({
      productCategoryId: [],
      addInfo: ['', Validators.required],
      categoryNameEn: ['', Validators.required],
      categoryNameRu: ['', Validators.required],
      categoryNameKk: ['', Validators.required],
    });

    this.categoryService.getCategoryById(+categoryId)
      .subscribe( data => {
        const category = new Category();
        category.productCategoryId = data.productCategoryId;
        category.addInfo = data.addInfo;
        category.categoryNameEn = data.categoryName.en;
        category.categoryNameRu = data.categoryName.ru;
        category.categoryNameKk = data.categoryName.kk;
        this.editFormCategory.setValue(category);
      });
  }

  onSubmit() {
    this.categoryService.updateCategory(this.editFormCategory.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['list-category']);
        },
        error => {
          alert(error);
        });
  }



}
