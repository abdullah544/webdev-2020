import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../category';

import { product, productCategory, Product} from '../products';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {
  @Input() category: Category;

  constructor() { }

  ngOnInit() {
  }

  selectProduct(selectedProduct): void {
    product.name = selectedProduct.name;
    product.price = selectedProduct.price;
    product.description = selectedProduct.description;
    product.rating = selectedProduct.rating;
    product.link = selectedProduct.link;
    product.image = selectedProduct.image;
    product.categoryId = selectedProduct.categoryId;
    product.productId = selectedProduct.productId;
  }
}