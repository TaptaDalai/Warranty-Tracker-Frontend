import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { RegisterComponent } from './components/register/register.component';
import { WarrantyLoginComponent } from './warranty-login/warranty-login.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    WarrantyLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
