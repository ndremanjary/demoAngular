import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentComponent } from './comment/comment.component';
import { LoginComponent } from './login/login.component';
import { NewVoitureComponent } from './new-voiture/new-voiture.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { VoitureComponent } from './voiture/voiture.component';

const routes: Routes = [
  {
    path:"voiture", component:VoitureComponent
  },
  {
    path:"comment/:idVoiture", component:CommentComponent
  },
  {
    path:"login", component:LoginComponent
  },
  {
    path:"new_vehicule", component:NewVoitureComponent
  },
  {
    path:"register", component:RegisterComponent
  },
  {
    path:"profile", component:ProfileComponent
  },
  {
    path:"", redirectTo:"/voiture", pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
