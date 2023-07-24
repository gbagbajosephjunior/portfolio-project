import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderServiceService {

  constructor() { }

  private showLoaderSubject = new Subject<boolean>();
  loaderAction$ = this.showLoaderSubject.asObservable();

  showLoader(){
    this.showLoaderSubject.next(true);
  }

  hideLoader(){
    this.showLoaderSubject.next(false);
  }
}
