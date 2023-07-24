import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { combineLatest, delay, from, map, tap } from 'rxjs';
import { LoaderServiceService } from 'src/app/loader-service.service';
import { CategoryService } from './category.service';
import { IPost } from './post';


@Injectable({
  providedIn: 'root'
})
export class HomeService implements OnInit{
  
  

  posts$ = this.http.get<{[id: string]: IPost}>('https://portfolio-new-3d5e8-default-rtdb.firebaseio.com/posts.json')
  .pipe(
    // delay(9000),
    map((posts) => {
    let postsData : IPost[] = [];
    for(let id in posts){
      postsData.push({...posts[id], id});
    }
    return postsData;
  }));

  postWithCategory$ = combineLatest([
    this.posts$,
    this.categoriesService.categories$,
  ]).pipe(
    tap((data) => {
    this.LoaderServiceService.hideLoader();
  }),map(([posts, categories]) => posts.map(post => ({
    ...post,
    categoryName: categories.find(categories => post.price === categories.id)?.title,
  } as IPost ))))
   
  
  
  constructor(private http: HttpClient, private categoriesService: CategoryService, private LoaderServiceService: LoaderServiceService) { }

  ngOnInit()  : void{
    this.LoaderServiceService.showLoader();
  }


}
