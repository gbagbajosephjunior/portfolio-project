import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { combineLatest, map } from 'rxjs';
import { CategoryService } from './category.service';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent  {

  posts$ = this.homeService.postWithCategory$;
  category$ = this.categoryService.categories$;

  constructor(private homeService: HomeService, private categoryService: CategoryService) { }


}
