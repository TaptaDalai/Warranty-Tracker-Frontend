import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Product {
  id: string;
  userMail: string;
  productName: string;
  brand: string;
  purchaseDate: string;
  notifyBefore: string;
  expiresDate: string;
  description: string;
  link: string;
 }

@Component({
  selector: 'app-warranty-home',
  templateUrl: './warranty-home.component.html',
  styleUrl: './warranty-home.component.css'
})
export class WarrantyHomeComponent implements OnInit {
  productForm: FormGroup;
  products: Product[] = [];
  editIndex: number | null = null;

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      id: ['', Validators.required],
      userMail: ['', [Validators.required, Validators.email]],
      productName: ['', Validators.required],
      brand: ['', Validators.required],
      purchaseDate: ['', Validators.required],
      notifyBefore: ['', Validators.required],
      expiresDate: ['', Validators.required],
      description: ['', Validators.required],
      link: ['', Validators.required]
    });
  }
  ngOnInit(): void {}
  
  addProduct() {
    if (this.productForm.valid) {
      if (this.editIndex !== null) {
        this.products[this.editIndex] = this.productForm.value;
        this.editIndex = null;
      } else {
        this.products.push(this.productForm.value);
      }
      this.productForm.reset();
    }
  }
  editProduct(index: number) {
    this.editIndex = index;
    const product = this.products[index];
    this.productForm.setValue({
      id: product.id,
      userMail: product.userMail,
      productName: product.productName,
      brand: product.brand,
      purchaseDate: product.purchaseDate,
      notifyBefore: product.notifyBefore,
      expiresDate: product.expiresDate,
      description: product.description,
      link: product.link
    });
  }
  deleteProduct(index: number) {
    this.products.splice(index, 1);
  }
}
