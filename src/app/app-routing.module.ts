import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RandomUserComponent } from './components/random-user/random-user.component';
import { AuthGuard } from './guards/auth-guard';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'user', component: RandomUserComponent, canActivate: [AuthGuard] },
  { path: 'error', component: ErrorComponent },
  { path: '', component: LoginComponent },
  { path: '**', component: NotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
