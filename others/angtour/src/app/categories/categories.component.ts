import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { CATEGORIES } from '../mock-categories';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})

export class CategoriesComponent implements OnInit {

  categories = CATEGORIES;
  selectedCategory: Category;

  constructor() { }

  ngOnInit(){
  }

  onSelect(category: Category): void {
    this.selectedCategory = category;;
  }
}
