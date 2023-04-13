import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./pages/login/login.component";
import {MybookingComponent} from "./pages/mybooking/mybooking.component";

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'mybooking', component: MybookingComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
