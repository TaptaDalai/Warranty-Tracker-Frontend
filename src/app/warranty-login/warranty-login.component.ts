import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-warranty-login',
  templateUrl: './warranty-login.component.html',
  styleUrl: './warranty-login.component.css',
})
export class WarrantyLoginComponent implements OnInit {
  regArray:any={}
  reactiveForm!: FormGroup;

  constructor(private fb: FormBuilder, private toastr: ToastrService){}

  ngOnInit(): void {
    
    this.reactiveForm=new FormGroup({
      email : new FormControl('',[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$")]),
      Password : new FormControl('',[Validators.required, Validators.maxLength(8)])
    })
  }


  onSubmit(): void{
    if (this.reactiveForm.valid){
      console.log(this.reactiveForm.value);
      this.toastr.success('Login successful!', 'success',{
        toastClass: 'ngx-toastr custom-success-toast'
      });
    }else{
      this.toastr.error('Please fill out the form correctly','Error');
    }
    this.toastr.success('Login Successful', 'Success')
  }
  

}
