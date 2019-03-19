import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/category';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {
  categories: Category[];
  constructor(private router: Router, private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.listCategories()
    .subscribe( data => {
      this.categories = data;
    });
  }

  addCategory(): void {
    this.router.navigate(['category']);

  }

  deleteCategory(category: Category): void {
    if (window.confirm('Вы уверены, что хотите удалить?')) {
    this.categoryService.deleteCategory(category.productCategoryId)
      .subscribe( data => {
        this.categories = this.categories.filter(c => c !== category);
      })
    }
  }

  editCategory(category: Category): void {
    localStorage.removeItem('editCategoryId');
    localStorage.setItem('editCategoryId', category.productCategoryId.toString());
    this.router.navigate(['edit-category']);

  }



}
