import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {environment} from '../../../environments/environment';
import {Category} from '../../models/category';
import {CategoryService} from '../../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categoryForm: FormGroup;

  constructor(private http: HttpClient, private builder: FormBuilder,
              private categoryService: CategoryService, private router: Router) {
      this.categoryForm = this.builder.group({
        addInfo: [null, Validators.required],
        categoryNameEn: [null, Validators.required],
        categoryNameKk: [null, Validators.required],
        categoryNameRu: [null, Validators.required],
      });
    }
    addCategory() {
      const category = new Category();
      category.addInfo = this.categoryForm.get('addInfo').value;
      category.categoryNameEn = this.categoryForm.get('categoryNameEn').value;
      category.categoryNameKk = this.categoryForm.get('categoryNameKk').value;
      category.categoryNameRu = this.categoryForm.get('categoryNameRu').value;
      console.log(category);
      this.categoryForm.reset();
      this.categoryService.add(category);
      this.router.navigate(['profile']);
    }

  ngOnInit() {
  }

}
