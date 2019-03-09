import { Products } from './../../../models/products';
import { ProductService } from './../../../services/product.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  products: Products[];
  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit() {
    this.productService.listProducts()
    .subscribe( data => {
      this.products = data;
    });
  }

  addProduct(): void{
    this.router.navigate(['add-product']);

  }

}
