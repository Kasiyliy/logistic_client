import { ProductService } from './../../services/product.service';
import { Products } from './../../models/products';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categories: Category[];
  products: Products[];
  constructor(private categoryService: CategoryService, private productService: ProductService) { }

  ngOnInit() {
    this.categoryService.listCategories()
    .subscribe( data => {
      this.categories = data;
    });

    this.productService.listProducts()
    .subscribe(data => {
      this.products = data;
    })
  }

}
