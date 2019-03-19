import { AddRegionComponent } from 'src/app/components/location/add-region/add-region.component';
import { ListRegionComponent } from 'src/app/components/location/list-region/list-region.component';
import { AddCountryComponent } from 'src/app/components/location/add-country/add-country.component';
import { LocationComponent } from 'src/app/components/location/location.component';
import { AddShipperComponent } from 'src/app/components/profile/add-shipper/add-shipper.component';
import { EditSubcategoryComponent } from 'src/app/components/profile/edit-subcategory/edit-subcategory.component';
import { AddProductComponent } from 'src/app/components/profile/add-product/add-product.component';
import { AddSubcategoryComponent } from 'src/app/components/profile/add-subcategory/add-subcategory.component';
import { ListProductComponent } from './components/profile/list-product/list-product.component';
import { AddCategoryComponent } from './components/profile/add-category/add-category.component';
import { CategoryComponent } from './components/category/category.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import { ListCategoryComponent } from './components/profile/list-category/list-category.component';
import { EditCategoryComponent } from './components/profile/edit-category/edit-category.component';
import { ListSubcategoryComponent } from './components/profile/list-subcategory/list-subcategory.component';
import { ShopComponent } from './components/shop/shop.component';
import { ShipperComponent } from './components/shipper/shipper.component';
import { ListShipperComponent } from './components/profile/list-shipper/list-shipper.component';
import { EditShipperComponent } from './components/profile/edit-shipper/edit-shipper.component';
import { EditCountryComponent } from './components/location/edit-country/edit-country.component';
import { EditRegionComponent } from './components/location/edit-region/edit-region.component';
const routes: Routes = [
  {path : 'contact' , component : ContactComponent},
  {path : 'login' , component : LoginComponent},
  {path : 'register' , component : RegisterComponent},
  {path : 'profile', component: ProfileComponent},
  {path: 'home' , component: HomeComponent },
  {path: 'category' , component: CategoryComponent },
  {path: 'add-category', component: AddCategoryComponent},
  {path: 'list-category', component: ListCategoryComponent },
  { path: 'edit-category', component: EditCategoryComponent },
  { path: 'list-product', component: ListProductComponent  },
  { path: 'add-subcategory' , component: AddSubcategoryComponent },
  { path: 'list-subcategory' , component: ListSubcategoryComponent },
  { path: 'list-product' , component: ListProductComponent },
  { path: 'add-product' , component: AddProductComponent },
  { path: 'edit-subcategory' , component: EditSubcategoryComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'list-shipper', component: ListShipperComponent },
  {path: 'add-shipper', component: AddShipperComponent},
  { path: 'edit-shipper', component: EditShipperComponent },
  { path: 'location', component: LocationComponent },
  {  path: 'add-country', component: AddCountryComponent },
  { path: 'edit-country', component: EditCountryComponent },
  { path: 'list-region', component: ListRegionComponent},
  { path: 'add-region', component: AddRegionComponent },
  { path: 'edit-region', component: EditRegionComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
