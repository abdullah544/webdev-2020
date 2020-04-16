import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { ProductCategoryComponent } from './product-category/product-category.component';

import { ProductInfoComponent } from './product-info/product-info.component';
import { ProductPartComponent } from './product-part/product-part.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    CategoryDetailComponent,
    ProductCategoryComponent,
    ProductListComponent,
    ProductPartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'categories', component: ProductCategoryComponent},
      { path: 'categories/:categoryId/:products', component:  ProductPartComponent},
      { path: 'products/productId', component: ProductInfoComponent}
    ]),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }