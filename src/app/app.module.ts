import { CategoryService } from 'src/app/services/category.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule, NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

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
import { EditSubcategoryComponent } from 'src/app/components/profile/edit-subcategory/edit-subcategory.component';
import { ShopComponent } from 'src/app/components/shop/shop.component';
import { ShipperComponent } from 'src/app/components/shipper/shipper.component';
import { AddShipperComponent } from 'src/app/components/profile/add-shipper/add-shipper.component';
import { ListShipperComponent } from 'src/app/components/profile/list-shipper/list-shipper.component';
import { EditShipperComponent } from 'src/app/components/profile/edit-shipper/edit-shipper.component';
import { LocationComponent } from 'src/app/components/location/location.component';
import { AddCountryComponent } from 'src/app/components/location/add-country/add-country.component';
import { EditCountryComponent } from 'src/app/components/location/edit-country/edit-country.component';
import { ListRegionComponent } from 'src/app/components/location/list-region/list-region.component';
import { AddRegionComponent } from 'src/app/components/location/add-region/add-region.component';
import { EditRegionComponent } from 'src/app/components/location/edit-region/edit-region.component';
import { DataTableModule } from 'angular-6-datatable';

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
    EditSubcategoryComponent,
    ShopComponent,
    ShipperComponent,
    AddShipperComponent,
    ListShipperComponent,
    EditShipperComponent,
    LocationComponent,
    AddCountryComponent,
    EditCountryComponent,
    ListRegionComponent,
    AddRegionComponent,
    EditRegionComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    DataTableModule
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
