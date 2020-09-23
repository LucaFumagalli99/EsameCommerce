import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuardService } from './core/guard/login-guard.service';


const routes: Routes = [
  { path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule), canLoad: [LoginGuardService] },
  { path: 'login', loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./features/register/register.module').then(m => m.RegisterModule) },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'customize', loadChildren: () => import('./features/customize/customize.module').then(m => m.CustomizeModule) },
  { path: 'cart', loadChildren: () => import('./features/cart/cart.module').then(m => m.CartModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
