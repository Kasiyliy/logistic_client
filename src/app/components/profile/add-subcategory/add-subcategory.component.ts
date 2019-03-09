import { SubCategoryService } from './../../../services/subcategory.service';
import { SubCategory } from './../../../models/subcategory';
import { Component, OnInit } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {environment} from 'src/environments/environment';
import { Router} from '@angular/router';

@Component({
  selector: 'app-add-subcategory',
  templateUrl: './add-subcategory.component.html',
  styleUrls: ['./add-subcategory.component.css']
})
export class AddSubcategoryComponent implements OnInit {
  subcategoryForm: FormGroup;
  constructor(private http: HttpClient, private builder: FormBuilder,
    private subcategoryService: SubCategoryService, private router: Router) {
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
      subcategory.productCategoryId = this.subcategoryForm.get('productCategoryId').value;
      subcategory.subCategoryAddInfo = this.subcategoryForm.get('subCategoryAddInfo').value;
      subcategory.subCategoryNameEn = this.subcategoryForm.get('subCategoryNameEn').value;
      subcategory.subCategoryNameKk = this.subcategoryForm.get('subCategoryNameKk').value;
      subcategory.subCategoryNameRu = this.subcategoryForm.get('subCategoryNameRu').value;
      console.log(subcategory);
      this.subcategoryForm.reset();
      this.subcategoryService.add(subcategory);
      this.router.navigate(['list-subcategory']);
    }

  ngOnInit() {
  }

}
