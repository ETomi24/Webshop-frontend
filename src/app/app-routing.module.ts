import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminListPageComponent } from './components/admin-list-page/admin-list-page.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { CategoryCreateComponent } from './components/category-create/category-create.component';
import { CategoryEditComponent } from './components/category-edit/category-edit.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';

const routes: Routes = [
  { path: 'admin-list', component: AdminListPageComponent },
  { path: 'product-edit/:id', component: ProductEditComponent },
  { path: 'product-create', component: ProductCreateComponent },
  { path: 'category-edit/:id', component: CategoryEditComponent},
  { path: 'category-create', component: CategoryCreateComponent},
  { path: 'cart', component: CartPageComponent },
  { path: 'product-detail/:id', component: ProductDetailComponent},
  { path: 'product-list', component: ProductListComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'registration', component: RegistrationPageComponent },
  { path: '', component: LoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
