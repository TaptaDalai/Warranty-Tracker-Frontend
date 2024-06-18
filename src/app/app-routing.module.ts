import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WarrantyManagementComponent } from './warranty-management/warranty-management.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { DocumentStorageComponent } from './document-storage/document-storage.component';
import { ProductInformationComponent } from './product-information/product-information.component';


const routes: Routes = [
  { path: '', redirectTo: '/warranty', pathMatch: 'full' },
  { path: 'warranty', component: WarrantyManagementComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'documents', component: DocumentStorageComponent },
  { path: 'product-info', component: ProductInformationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

