import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GraphQLModule } from './API/graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import {RouterOutlet} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import {ReactiveFormsModule} from "@angular/forms";
import { MybookingComponent } from './pages/mybooking/mybooking.component';
import { HeaderComponent } from './shared/header/header.component';
import { ButtonComponent } from './shared/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MybookingComponent,
    HeaderComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    GraphQLModule,
    HttpClientModule,
    RouterOutlet,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
