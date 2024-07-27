import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { DialogeComponent } from './shared/components/dialoge/dialoge.component';
import { HomeComponent } from './shared/components/home/home.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { ProductComponent } from './shared/components/product/product.component';
import { ProductFormComponent } from './shared/components/product-form/product-form.component';
import { UsersComponent } from './shared/components/users/users.component';
import { UserComponent } from './shared/components/user/user.component';
import { UserFormComponent } from './shared/components/user-form/user-form.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    // DialogeComponent,
    HomeComponent,
    NavbarComponent,
    PageNotFoundComponent,
    ProductsComponent,
    ProductComponent,
    ProductFormComponent,
    UsersComponent,
    UserComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
