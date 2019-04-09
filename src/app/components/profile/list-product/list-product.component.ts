import { Products } from './../../../models/products';
import { ProductService } from './../../../services/product.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SubCategoryService } from './../../../services/subcategory.service';
import { SubCategory } from './../../../models/subcategory';
import { Category } from 'src/app/models/category';
import { CategoryService } from './../../../services/category.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  products: Products[];
  subcategories: SubCategory[];
  categories: Category[];
  constructor(private router: Router, private productService: ProductService ,
              private subcategoryService: SubCategoryService, private categoryService: CategoryService) { }

  ngOnInit() {
    this.productService.listProducts()
    .subscribe( data => {
      this.products = data;
    });
  }

  addProduct(): void {
    this.router.navigate(['add-product']);

  }


  deleteProduct(product: Products): void {
    if (window.confirm('Вы уверены, что хотите удалить?')) {
    this.productService.deleteProduct(product.productId)
      .subscribe( data => {
        this.products = this.products.filter(p => p !== product);
      })
    }
  }

  editProduct(product: Products): void {
    localStorage.removeItem('editProductId');
    localStorage.setItem('editProductId', product.productId.toString());
    this.router.navigate(['edit-product']);

  }





}
