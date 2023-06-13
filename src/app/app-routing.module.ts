import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuestionsComponent } from './questions/questions.component';
import { AnswersComponent } from './answers/answers.component';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import{AdminLoginComponent} from './admin/login/login.component'
import { ResetPasswordComponent } from './user/reset-password/reset-password.component';
import { UserComponent } from './user/user/user.component';
import { AddQuestionComponent } from './questions/add-question/add-question.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'users/dashboard',component:UserComponent},
  {path:'questions',component:QuestionsComponent},
  {path:'questions/add-question',component:AddQuestionComponent},
  {path:'answers',component:AnswersComponent},
  {path:'admin/login',component:AdminLoginComponent},
  {path:'admin/admin-dashboard',component:AdminDashboardComponent},
  {path:'users/registration',component:RegistrationComponent},
  {path: 'users/resetPassword',component:ResetPasswordComponent},
  {path:'users/login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
