import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';

import { RegisterComponent } from './components/register/register.component';
import { WarrantyLoginComponent } from './warranty-login/warranty-login.component';
import { HttpClientModule } from '@angular/common/http';
import { WarrantyHomeComponent } from './warranty-home/warranty-home.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    WarrantyLoginComponent,
    WarrantyHomeComponent
  ],
  imports: [
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
    }),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
    
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
