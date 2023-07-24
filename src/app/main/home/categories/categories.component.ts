import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  // category$ = this.categoriesService.categories$;
  constructor(private categoriesService: CategoryService) { }

  ngOnInit(): void {
  }

}
