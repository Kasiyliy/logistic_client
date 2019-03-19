import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/category';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
    categories: Category[];
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.listCategories()
    .subscribe( data => {
      this.categories = data;
    });  }

}
