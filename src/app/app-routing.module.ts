import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminListPageComponent } from './components/admin-list-page/admin-list-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';

const routes: Routes = [
  { path: 'admin-list', component: AdminListPageComponent },
  { path: 'product-create', component: ProductCreateComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'registration', component: RegistrationPageComponent },
  { path: '', component: LoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
