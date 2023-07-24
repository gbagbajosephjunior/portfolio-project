import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from '../login/customer';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  customerForm: FormGroup;
  customer = new Customer;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(3)]],
      notification: 'email',
      password: ['', [Validators.required, Validators.minLength(3)]],
    });

    this.customerForm.get('notification').valueChanges.subscribe(
      value => this.setNotification(value)
    )
  }

  setNotification(notifyVia: string): void{
const phoneControl = this.customerForm.get('phone');
      if(notifyVia === 'text'){
        phoneControl.setValidators(Validators.required);
      }else{
        phoneControl.clearValidators();
      }
      phoneControl.updateValueAndValidity();
  }

  save(){

  }
}
