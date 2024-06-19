import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-warranty-login',
  templateUrl: './warranty-login.component.html',
  styleUrl: './warranty-login.component.css',
})
export class WarrantyLoginComponent implements OnInit {
  regArray:any={}
  constructor(private fb : FormBuilder){}
  reactiveForm!: FormGroup;

  ngOnInit(): void {
    this.reactiveForm=new FormGroup({
      email : new FormControl('',[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$")]),
      Password : new FormControl('',[Validators.required, Validators.maxLength(8)])
    })
  }


  onSubmit(){
    console.log(this.reactiveForm.value)
  }
  

}
