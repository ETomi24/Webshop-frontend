import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';
import { AdminListPageComponent } from './components/admin-list-page/admin-list-page.component';
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { CategoryCreateComponent } from './components/category-create/category-create.component';
import { CategoryEditComponent } from './components/category-edit/category-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegistrationPageComponent,
    AdminListPageComponent,
    ProductCreateComponent,
    ProductListComponent,
    ProductEditComponent,
    ProductDetailComponent,
    CartPageComponent,
    CategoryCreateComponent,
    CategoryEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
