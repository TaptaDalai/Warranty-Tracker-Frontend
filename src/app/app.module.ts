import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WarrantyManagementComponent } from './warranty-management/warranty-management.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { DocumentStorageComponent } from './document-storage/document-storage.component';
import { ProductInformationComponent } from './product-information/product-information.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    WarrantyManagementComponent,
    NotificationsComponent,
    DocumentStorageComponent,
    ProductInformationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
