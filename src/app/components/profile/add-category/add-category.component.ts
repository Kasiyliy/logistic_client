import { Component, OnInit } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Category} from 'src/app/models/category';
import {CategoryService} from 'src/app/services/category.service';


@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  categoryForm: FormGroup;

  constructor(private http: HttpClient, private builder: FormBuilder,
              private categoryService: CategoryService) {
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

    }

  ngOnInit() {
  }



}
