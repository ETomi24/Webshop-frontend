import { Component, NgModule } from '@angular/core';
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
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: 'admin-list', component: AdminListPageComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'ROLE_ADMIN'
    }
  },
  {
    path: 'product-edit/:id', component: ProductEditComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'ROLE_ADMIN'
    }
  },
  {
    path: 'product-create', component: ProductCreateComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'ROLE_ADMIN'
    }
  },
  {
    path: 'category-edit/:id', component: CategoryEditComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'ROLE_ADMIN'
    }
  },
  {
    path: 'category-create', component: CategoryCreateComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'ROLE_ADMIN'
    }
  },
  {
    path: 'cart', component: CartPageComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'ROLE_CUSTOMER'
    }
  },
  {
    path: 'product-detail/:id', component: ProductDetailComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'ROLE_CUSTOMER'
    }
  },
  {
    path: 'product-list', component: ProductListComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'ROLE_CUSTOMER'
    }
  },
  {
    path: 'registration', component: RegistrationPageComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'ROLE_CUSTOMER'
    }
  },
  {
    path: 'profile', component: UserProfileComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'ROLE_CUSTOMER'
    }
  },
  {
    path: 'login', component: LoginPageComponent,
  },
  {
    path: '', component: LoginPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
