import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs';


@Component({
  selector: 'app-admin-route',
  templateUrl: './admin-route.component.html',
  styleUrls: ['./admin-route.component.css']
})
export class AdminRouteComponent implements OnInit {
  postForm: FormGroup;
  
 
  constructor(private fb: FormBuilder,
     private http: HttpClient, private router: Router) { }

  

  ngOnInit(): void {
    this.postForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(4)]],
      categoryId: ['', [Validators.required, Validators.minLength(4)]],
      description: ['', [Validators.required, Validators.minLength(4)]],
      price: ['', [Validators.required, Validators.minLength(2)]],
      techStack: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  populateTestData(){
    this.postForm.setValue({
      title: "Barns Dooga Web Developer",
      categoryId: "Dooga",
      price: "80",
      techStack: "ANGULAR stack",
      description: "A FrontEnd Developer",
    })
      };
      
  onAddPostSubmit(){
   this.http.post(`https://portfolio-new-3d5e8-default-rtdb.firebaseio.com/categories.json`, this.postForm.value).
   subscribe(Response => {
     console.log(this.postForm.value);
     this.postForm.reset();
     this.router.navigate(['/Admin']);
    }, err =>console.log(console.error));
  }
}
