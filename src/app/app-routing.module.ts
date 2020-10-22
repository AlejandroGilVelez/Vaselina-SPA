import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientEditComponent } from './client/client-edit/client-edit.component';
import { ClientComponent } from './client/client.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  { path:"client-edit", component: ClientEditComponent},
  { path:"client", component: ClientComponent},
  { path:"contact", component: ContactComponent},
  { path:"user-edit", component: UserEditComponent},
  { path:"user", component: UserComponent},
  { path:"home", component: HomeComponent},
  { path:"login", component: LoginComponent},
  { path:"**", redirectTo: "login", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
