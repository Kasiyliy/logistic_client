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
    editForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private categoryService: CategoryService) { }

  ngOnInit() {
    const categoryId = localStorage.getItem('editCategoryId');
    if (!categoryId) {
      alert('Invalid action.');
      this.router.navigate(['list-category']);
      return;
    }
    this.editForm = this.formBuilder.group({
      productCategoryId: [],
      addInfo: ['', Validators.required],
      categoryNameEn: ['', Validators.required],
      categoryNameRu: ['', Validators.required],
      categoryNameKk: ['', Validators.required],
    });
    this.categoryService.getCategoryById(+categoryId)
      .subscribe( data => {
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    this.categoryService.updateCategory(this.editForm.value)
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
