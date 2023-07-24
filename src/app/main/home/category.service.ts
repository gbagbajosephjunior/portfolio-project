import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, shareReplay, tap } from 'rxjs';
import { Icategory } from './category';
// import { IPost } from './post';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  categories$ = this.http.get<{[id: string]: Icategory}>('https://portfolio-new-3d5e8-default-rtdb.firebaseio.com/categories.json')
  .pipe(delay(2000),
  shareReplay(1),
    map((categories) => {
    let postsData : Icategory[] = [];
    for(let id in categories){
      postsData.push({...categories[id], id});
    }
    return postsData;
  }));
 
}

