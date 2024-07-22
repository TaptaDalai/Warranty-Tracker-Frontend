import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { WarrantyLoginComponent } from './warranty-login/warranty-login.component';
import { WarrantyHomeComponent } from './warranty-home/warranty-home.component';



const routes: Routes = [{path:"", redirectTo:"warranty-login", pathMatch:"full"},
  {path:"warranty-login", component:WarrantyLoginComponent},
  {path: "register", component:RegisterComponent},
  {path: "warranty-home",component:WarrantyHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

