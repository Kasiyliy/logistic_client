import { ProductService } from './../../../services/product.service';
import { Products } from './../../../models/products';
import { Component, OnInit } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {environment} from 'src/environments/environment';
import { Router} from '@angular/router';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productForm: FormGroup;
  constructor(private http: HttpClient, private builder: FormBuilder,
    private productService: ProductService, private router: Router) {
      this.productForm = this.builder.group({
        categoryId: [null, Validators.required],
        description: [null, Validators.required],
        productId: [null, Validators.required],
        productNameEn: [null, Validators.required],
        productNameKk: [null, Validators.required],
        productNameRu: [null, Validators.required],
        sellerCategoryId: [null, Validators.required],
        sellerCompanyId: [null, Validators.required],
        specialCharacteristicsId: [null, Validators.required],
        subCategoryId: [null, Validators.required],
      });
     }


    addProduct() {
      const product = new Products();
      product.categoryId = this.productForm.get('categoryId').value;
      product.description = this.productForm.get('description').value;
      product.productId = this.productForm.get('productId').value;
      product.productNameEn = this.productForm.get('productNameEn').value;
      product.productNameKk = this.productForm.get('productNameKk').value;
      product.productNameRu = this.productForm.get('productNameRu').value;
      product.sellerCategoryId = this.productForm.get('sellerCategoryId').value;
      product.sellerCompanyId = this.productForm.get('sellerCompanyId').value;
      product.specialCharacteristicsId = this.productForm.get('specialCharacteristicsId').value;
      product.subCategoryId = this.productForm.get('subCategoryId').value;
      console.log(product);
      this.productForm.reset();
      this.productService.add(product);
    }



  ngOnInit() {
  }

}
