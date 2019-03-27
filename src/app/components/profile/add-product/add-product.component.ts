import { ProductService } from './../../../services/product.service';
import { Products } from './../../../models/products';
import { Component, OnInit } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {environment} from 'src/environments/environment';
import { Router} from '@angular/router';
import { Category } from 'src/app/models/category';
import { SubCategory } from 'src/app/models/subcategory';

import { CategoryService } from './../../../services/category.service';
import { SubCategoryService } from './../../../services/subcategory.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  categories: Category[] = [];
  subcategories: SubCategory[] = [];
  productForm: FormGroup;
  constructor(private http: HttpClient, private builder: FormBuilder,
    private productService: ProductService,private subcategoryService: SubCategoryService, private router: Router, private categoryService: CategoryService) {
      this.productForm = this.builder.group({
        productCategoryId: [null, Validators.required],
        productDescription: [null, Validators.required],
        productNameEn: [null, Validators.required],
        productNameKk: [null, Validators.required],
        productNameRu: [null, Validators.required],
        sellerCompanyId: [null, Validators.required],
        price:[ null, Validators.required],
        size: [null, Validators.required],
        manufacturer: [null, Validators.required],
        weight: [null, Validators.required],
        specialCharacteristicsId: [null, Validators.required],
        productSubCategoryId: [null, Validators.required],
        serialNumber: [null, Validators.required],
        uniqueIdNumber: [null , Validators.required],
      });
     }


    addProduct() {
      const product = new Products();
      product.productCategoryId = parseInt(this.productForm.get('productCategoryId').value, 10);
      product.productDescription = this.productForm.get('productDescription').value;
      product.productSubCategoryId = parseInt(this.productForm.get('productSubCategoryId').value,10);
      product.productNameEn = this.productForm.get('productNameEn').value;
      product.productNameKk = this.productForm.get('productNameKk').value;
      product.productNameRu = this.productForm.get('productNameRu').value;
      product.sellerCompanyId = this.productForm.get('sellerCompanyId').value;
      product.specialCharacteristicsId = this.productForm.get('specialCharacteristicsId').value;
      product.size = this.productForm.get('size').value;
      product.weight = this.productForm.get('weight').value;
      product.price = this.productForm.get('price').value;
      product.serialNumber = this.productForm.get('serialNumber').value;
      product.uniqueIdNumber = this.productForm.get('uniqueIdNumber').value;
      product.manufacturer = this.productForm.get('manufacturer').value;

      console.log(product);
      this.productForm.reset();
      this.productService.add(product);
    }



  ngOnInit() {
    this.categoryService.listCategories().subscribe(categories => {
      this.categories = categories;
    });
    this.subcategoryService.listSubCategories().subscribe(subcategories =>{
      this.subcategories=subcategories;
    });
  }

}
