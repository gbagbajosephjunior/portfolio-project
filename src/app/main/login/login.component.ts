import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Customer } from './customer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage: string;
customerForm: FormGroup;
customer = new Customer();
  constructor(private authService: AuthService, private route: Router) { }

  ngOnInit(): void {
    this.customerForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('', [Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)]),
      message: new FormControl(''),
    })
  }

  populateTestData(){
this.customerForm.setValue({
  firstName: "Joseph",
  lastName: "Gbagba",
  email: "gbagbajosephjunior@gmail.com",
  message: 'employ me',
  password: 2222
})
  };

  populate(){
    this.customerForm.patchValue({
      firstName: "Joseph",
      lastName: "Gbagba",
      email: "gbagbajosephjunior@gmail.com",
      message: 'employ me in your oragnization to bring my skills to maximize companys wealth',
    })
  }

  save(){
    if(this.customerForm.valid){
      const userName = this.customerForm.value.firstName;
      const password = this.customerForm.value.password;
      this.authService.login(userName, password);

      if(this.authService.redirecturl){
        this.route.navigateByUrl(this.authService.redirecturl);
      }else{
        console.log(this.customerForm.value);
        this.route.navigate(['/home']);
      }

    }else{
      this.errorMessage = 'please enter your user name and password';
    }
  }
}
