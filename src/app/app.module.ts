import { CategoryService } from 'src/app/services/category.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule, FormBuilder, FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {APP_BASE_HREF} from '@angular/common';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { CategoryComponent } from './components/category/category.component';
import { AddCategoryComponent } from 'src/app/components/profile/add-category/add-category.component';
import { ListCategoryComponent } from './components/profile/list-category/list-category.component';
import { EditCategoryComponent } from './components/profile/edit-category/edit-category.component';
import { ListProductComponent } from './components/profile/list-product/list-product.component';
import { ListSubcategoryComponent } from 'src/app/components/profile/list-subcategory/list-subcategory.component';
import { AddSubcategoryComponent } from 'src/app/components/profile/add-subcategory/add-subcategory.component';
import { AddProductComponent } from 'src/app/components/profile/add-product/add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    NavComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    HomeComponent,
    CategoryComponent,
    AddCategoryComponent,
    ListCategoryComponent,
    EditCategoryComponent,
    ListProductComponent,
    ListSubcategoryComponent,
    AddSubcategoryComponent,
    AddProductComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    FormBuilder,
    HttpClient,
    {provide: APP_BASE_HREF, useValue : '/' },
    CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
