import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './Authguard/authentication.guard';
import { ArchiveComponent } from './component/archive/archive.component';

import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { GetALLNotesComponent } from './component/get-allnotes/get-allnotes.component';
import { IconsComponent } from './component/icons/icons.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';
import { TakeNoteComponent } from './component/take-note/take-note.component';
import { TrashComponent } from './component/trash/trash.component';


const routes: Routes = [
  {path:'register',component:RegisterComponent},
  { path: '', redirectTo: "/dashboard", pathMatch: 'full' },
  {path:'login',component:LoginComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path:'reset-password/:token',component:ResetPasswordComponent},
  { path: '', redirectTo: "/login", pathMatch: 'full' },
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthenticationGuard],  
children:[
  {path:'Notes',component:GetALLNotesComponent},
  {path:'Archive',component:ArchiveComponent},
  {path:'Trash',component:TrashComponent},
  
]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
