import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  get isLogedIn(): boolean{
    return this.authService.isLoggedIn
  }
  get isLogedOut(){
    return this.authService.logout();
  }
  get userName(): string{
    if(this.authService.currentUser){
         this.authService.currentUser.userName
    }
    return '';
  }

  logOut(): void{
    this.authService.logout();
    this.router.navigateByUrl('/home');
    console.log('logout')
  }

 
  ngOnInit(): void {
  }

id: any;

tiv(param: any){
    if(this.id == param){
      this.id = "";
    }else{
      this.id = param;
      // console.log(param);
    }

}



}
