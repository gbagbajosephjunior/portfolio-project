import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs';
import { Customer } from '../login/customer';


function emailMatcher(c: AbstractControl): {[key: string]: boolean} | null{
  const emailControl = c.get('email');
  const confirmEmailControl = c.get('confirmEmail');

  if(emailControl.pristine || confirmEmailControl.pristine){
    return null;
  }

  if(emailControl.value === confirmEmailControl.value){
    return null;
  }
  return {'match': true};
}

function ratingRange(min: number, max: number): ValidatorFn{
  return (c: AbstractControl): { [key: string]: boolean } | null =>{
    if(c.value !== null && (isNaN(c.value) || c.value < min || c.value > max)){
      return{'range': true};
    }
    return null;
  }
  
}
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  customerForm: FormGroup;
  customer = new Customer();
  emailMessage: string;
  firstNametype: string;
  lastNametype: string;
  rangeType: string;


  private validationMessages = {
    required: 'Please enter your email address',
    email: 'please enter a valid email address'
  }
  private firstName = {
    required: 'Please enter your first name',
    minLength: 'minimun length is 3 characters'
  }
  private lastName = {
    required: 'Please enter your last name',
    minLength: 'minimun length is 3 characters'
  }
  private city = {
    required: 'Please enter valid city name ',
    minLength: 'minimun length is 3 characters'
  }

  get tags(): FormArray {
    return this.customerForm.get('tags') as FormArray;
  }
 
  constructor(private fb: FormBuilder,
     private http: HttpClient, private router: Router) { }

  

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      emailGroup: this.fb.group({
          email: ['', [Validators.required, Validators.email]],
          confirmEmail: ['', [Validators.required]],
      }, {Validator: emailMatcher}),
      rating: [null, ratingRange(1,5)],
      message: '',
      city: ['', [Validators.required]],
      tags: this.fb.array([]),
    });

   const emailControl = this.customerForm.get('emailGroup.email');
   emailControl.valueChanges.pipe(debounceTime(1000)).subscribe(
     value => this.setMessage(emailControl)
   )
   const firstName = this.customerForm.get('firstName');
   firstName.valueChanges.pipe(debounceTime(1000)).subscribe(
     value => this.setMessagefirstName(firstName)
   )
   const lastName = this.customerForm.get('lastName');
   lastName.valueChanges.pipe(debounceTime(1000)).subscribe(
     value => this.setMessagelastName(lastName)
   )
   const city = this.customerForm.get('city');
   city.valueChanges.pipe(debounceTime(1000)).subscribe(
     value => this.setMessagecity(city)
   )
  }

  setMessage(c: AbstractControl): void{
    this.emailMessage = '';
    if((c.touched || c.dirty) && (c.errors)){
      this.emailMessage = Object.keys(c.errors).map(
        key => this.validationMessages[key]
      ).join('');
    }
  }
  setMessagefirstName(c: AbstractControl): void{
    this.firstNametype = '';
    if((c.touched || c.dirty) && (c.errors)){
      this.firstNametype = Object.keys(c.errors).map(
        key => this.firstName[key]
      ).join('');
    }
  }
  setMessagelastName(c: AbstractControl): void{
    this.lastNametype = '';
    if((c.touched || c.dirty) && (c.errors)){
      this.lastNametype = Object.keys(c.errors).map(
        key => this.lastName[key]
      ).join('');
    }
  }
  setMessagecity(c: AbstractControl): void{
    this.rangeType = '';
    if((c.touched || c.dirty) && (c.errors)){
      this.rangeType = Object.keys(c.errors).map(
        key => this.city[key]
      ).join('');
    }
  }

  addTag(): void{
    this.tags.push(new FormControl());
  }
  deleteTag(index: number): void {
    this.tags.removeAt(index);
    this.tags.markAsDirty();
  }
  onAddPostSubmit(){
   this.http.post(`https://portfolio-new-3d5e8-default-rtdb.firebaseio.com/posts.json`, this.customerForm.value).
   subscribe(Response => {
     console.log(this.customerForm.value);
     this.customerForm.reset();
     this.router.navigate(['/contacts']);
    }, err =>console.log(console.error));
  }
}

