import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login.component';
import { UserListComponent } from './features/users/user-list.component';
import { UserFormComponent } from './features/users/user-form.component';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'users',
    component: UserListComponent,
    canActivate: [authGuard]
  },
  {
    path: 'users/create',
    component: UserFormComponent,
    canActivate: [authGuard]
  },
  {
    path: 'users/edit/:id',
    component: UserFormComponent,
    canActivate: [authGuard]
  },
  { path: '**', redirectTo: '/login' }
];
