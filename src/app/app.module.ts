import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { WarrantyLoginComponent } from './warranty-login/warranty-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
=======
import { RegisterComponent } from './components/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
>>>>>>> 565ead32d77cbb40b1871c8ea7cea960697d181f

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    WarrantyLoginComponent
=======
    RegisterComponent
>>>>>>> 565ead32d77cbb40b1871c8ea7cea960697d181f
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    FormsModule,
=======
>>>>>>> 565ead32d77cbb40b1871c8ea7cea960697d181f
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
