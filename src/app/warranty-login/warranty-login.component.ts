import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule  } from '@angular/forms';

@Component({
  selector: 'app-warranty-login',
  imports:[ReactiveFormsModule,CommonModule],
  standalone:false,
  templateUrl: './warranty-login.component.html',
  styleUrl: './warranty-login.component.css'
})

export class WarrantyLoginComponent implements OnInit {
  userForm: FormGroup

  constructor(){
    this.userForm=new FormGroup({
      userName: new FormControl("",[Validators.required]),
      password: new FormControl("",[Validators.required,Validators.minLength(4)])
      
    })

  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  }
  // loginForm!: FormGroup;
  // constructor(private formBuilder: FormBuilder) {}
  // ngOnInit() {
  //   this.loginForm = this.formBuilder.group({
  //     username: ['', Validators.required, Validators.minLength(2)],
  //     password: ['', [Validators.required, Validators.minLength(4)]],
  //   });
    // this.loginForm.valueChanges.subscribe(data => console.log(data));
  
  
  


 
  // onsubmit() {
  //   console.log(this.userForm.value);
  // }

