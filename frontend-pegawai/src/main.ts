import 'zone.js';

import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app/app.component';
import { PegawaiListComponent } from './app/components/pegawai-list/pegawai-list';
import { PegawaiFormComponent } from './app/components/pegawai-form/pegawai-form';
import { LoginComponent } from './app/components/login/login.component';
import { RegisterComponent } from './app/components/register/register.component';
import { LandingComponent } from './app/components/landing/landing.component';
import { DashboardComponent } from './app/components/dashboard/dashboard.component';

import { AuthInterceptor } from './app/interceptors/auth.interceptor';
import { AuthGuard } from './app/guards/auth.guard';
import { PegawaiDetailComponent } from './app/components/pegawai-detail/pegawai-detail.component';
import { PegawaiEditComponent } from './app/components/pegawai-edit/pegawai-edit.component'; 
import { UserProfileComponent } from './app/components/user-profile/user-profile.component'; // 

const routes = [
  { path: '', component: LandingComponent }, // Landing page
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }, // Dashboard dilindungi
  { path: 'pegawai', component: PegawaiListComponent, canActivate: [AuthGuard] }, // Dilindungi
  { path: 'pegawai/tambah', component: PegawaiFormComponent, canActivate: [AuthGuard] }, // Dilindungi
  { path: 'pegawai/:id', component: PegawaiDetailComponent, canActivate: [AuthGuard] },
  { path: 'pegawai/:id/edit', component: PegawaiEditComponent, canActivate: [AuthGuard] }, // ⬅️ Tambahkan route ini
  { path: 'profile', component: UserProfileComponent, canActivate: [AuthGuard] }, //
  { path: '**', redirectTo: '/' } // Redirect ke landing page
];

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    provideRouter(routes)
  ]
}).catch(err => console.error(err));