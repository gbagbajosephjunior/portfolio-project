import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  postForm: FormGroup;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.postForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email])
    })
  }

  onAddPostSubmit(){
    this.http.post(`https://portfolio-new-3d5e8-default-rtdb.firebaseio.com/categories.json`, this.postForm.value).
    subscribe(Response => {
      console.log(this.postForm.value);
      this.postForm.reset();
      this.router.navigate(['/home']);
     }, err =>console.log(console.error));
   }

}
