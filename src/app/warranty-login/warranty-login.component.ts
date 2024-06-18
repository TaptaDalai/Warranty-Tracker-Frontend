import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-warranty-login',
  templateUrl: './warranty-login.component.html',
  styleUrl: './warranty-login.component.css'
})

export class WarrantyLoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required, Validators.minLength(2)],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
    // this.loginForm.valueChanges.subscribe(data => console.log(data));
  }
 
  submit() {
    console.log(this.loginForm.value);
  }
}

