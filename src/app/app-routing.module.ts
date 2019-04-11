import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Guard
import { AuthenticationGuard } from './guards/authentication-guard';

// Components
import { HomeComponent } from './components/home/home.component';
import { LeadsComponent } from './components/leads/leads.component';
import { LoginComponent } from './components/login/login.component';
import { UploadComponent } from './components/upload/upload.component';
import { ForgotComponent } from './components/forgot/forgot.component';
import { ManagerComponent } from './components/manager/manager.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ViewFlowComponent } from './components/view-flow/view-flow.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegistrationComponent } from './components/registration/registration.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', component: LeadsComponent, outlet: 'leads' },
      { path: '', component: SettingsComponent, outlet: 'settings' },
      { path: '', component: ManagerComponent, outlet: 'manager' },
    ],
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'view',
    component: ViewFlowComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'upload',
    component: UploadComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'registration',
    component: RegistrationComponent,
  },
  {
    path: 'forgot',
    component: ForgotComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
