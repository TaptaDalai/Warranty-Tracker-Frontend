import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WarrantyLoginComponent } from './warranty-login/warranty-login.component';
const routes: Routes = [ {path:"", redirectTo:"warranty-login", pathMatch:"full"},
{path:"warranty-login", component:WarrantyLoginComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
