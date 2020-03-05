import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { ReactiveFormsModule } from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { FourthProductsComponent } from './fourth-products/fourth-products.component';
import { ProductInfoComponent } from './product-info/product-info.component';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductCategoryComponent },
      { path: 'categories', component: ProductCategoryComponent },
      { path:'categories/:categoryId/:products' , component: FourthProductsComponent },
      { path:'products/:productID' , component: ProductInfoComponent}
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductCategoryComponent,
    FourthProductsComponent,
    ProductInfoComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
